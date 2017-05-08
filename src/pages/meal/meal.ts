import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppSettings } from '../../app/app.settings';
import { AddMealPage } from '../add-meal/add-meal';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html'
})
export class MealPage {
  public meals: FirebaseListObservable<any[]>;

  constructor(
    private navCtrl: NavController,
    private db: AngularFireDatabase
  ) {
    this.meals = db.list(AppSettings.db.mealsList);
  }

  addMeal() {
    this.navCtrl.push(AddMealPage);
  }

  deleteMeal(key) {
    // TODO : add confirm box
    this.meals.remove(key);
  }

  formatFoodList(foodList: string[]): string {
    foodList = foodList || [];

    return foodList
      .map(item => item[3])
      .join(' - ');
  }
}
