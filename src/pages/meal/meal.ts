import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddMealPage } from '../add-meal/add-meal';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html'
})
export class MealPage {

  constructor(public navCtrl: NavController) {}

  addMeal() {
      this.navCtrl.push(AddMealPage);
  }
}
