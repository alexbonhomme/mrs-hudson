import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

import { AppSettings } from '../../app/app.settings';
import { FoodService } from '../../services/food.service';

import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

const AUTOCOMPLETE_MAX_ITEMS = 10;

@Component({
  selector: 'page-add-meal',
  templateUrl: 'add-meal.html'
})
export class AddMealPage {
  public showAutocomplete: boolean = false;
  public searchQuery: string;

  public foodItemsOrigin: any[];
  public foodItems: any[];

  public meal = {
    datetime: moment().format('YYYY-MM-DDTHH:mmZ'),
    food: [],
    comment: ''
  };

  constructor(
    private navCtrl: NavController,
    private foodService: FoodService,
    private db: AngularFireDatabase,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    // get food set
    this.foodService.getAll().subscribe(data => this.foodItemsOrigin = data);
  }

  /**
   * Autocomplete method. Filter `foodItems` list using given `value`.
   *
   * @param {string} value
   */
  getItems(value: string) {
    // if the value is an empty string don't filter the items
    if (value && value.trim() !== '') {
      this.foodItems = this.foodItemsOrigin
        .filter(item => item[3].toLowerCase().indexOf(value.toLowerCase()) > -1)
        .slice(0, AUTOCOMPLETE_MAX_ITEMS);

      this.showAutocomplete = true;
    } else {
      this.showAutocomplete = false;
    }
  }

  /**
   * Add a food item to `meal.food` array.
   *
   * @param {any[]} item
   */
  addItem(item: any[]) {
    this.meal.food.push(item);

    // reset query and clear autocomplete
    this.searchQuery = '';
    this.showAutocomplete = false;
  }

  /**
   * Remove item from `meal.food` array.
   *
   * @param {number} index
   */
  removeItemAt(index: number) {
    this.meal.food.splice(index, 1);
  }

  /**
   * Save model to the database
   */
  save() {
    let loader = this.loadingCtrl.create({
      content: 'Enregistrement en cours...'
    });

    loader.present();

    // bind object to database
    this.db.
      list(AppSettings.db.mealsList)
      .push(this.meal)
      .then(() => {
        loader.dismiss();

        // goto to listing page
        this.navCtrl.pop();
      })
      .catch(error => {
        loader.dismiss();
        console.error(error);

        this.toastCtrl.create({
          message: "Oups, une erreur est survenue durant l'enregistrement des données ! :-(",
          duration: 3000
        }).present();
      });
  }
}
