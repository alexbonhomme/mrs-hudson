import { Component } from '@angular/core';

import { FoodService } from '../../services/food.service';

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
    data: '',
    time: '',
    food: [],
    comment: ''
  };

  constructor(
    private foodService: FoodService
  ) {
    this.foodService.getAll().subscribe(data => this.foodItemsOrigin = data);
  }

  getItems(event: any) {
    // set val to the value of the searchbar
    let value = event.target.value;

    // if the value is an empty string don't filter the items
    if (value && value.trim() != '') {
      this.foodItems = this.foodItemsOrigin
        .filter(item => item[3].toLowerCase().indexOf(value.toLowerCase()) > -1)
        .slice(0, AUTOCOMPLETE_MAX_ITEMS);

      this.showAutocomplete = true;
    } else {
      this.showAutocomplete = false;
    }
  }

  addItem(item) {
    this.meal.food.push(item);

    // reset query and clear autocomplete
    this.searchQuery = '';
    this.showAutocomplete = false;
  }

  removeItemAt(index) {
    this.meal.food.splice(index, 1);
  }

  save() {
    // TODO
  }
}
