import { Component, ViewChild, OnInit } from '@angular/core';
import { Slides } from 'ionic-angular';


import { FoodService } from '../../services/food.service';

@Component({
  selector: 'page-add-meal',
  templateUrl: 'add-meal.html'
})
export class AddMealPage implements OnInit {
  @ViewChild(Slides) slides: Slides;

  public showAutocomplete: boolean = false;
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
    this.initializeFoodItems();
  }

  ngOnInit() {
    // avoid swipe to next slide to performe validation
    // this.slides.lockSwipeToNext(true);
  }

  private initializeFoodItems() {
    this.foodService.getAll().subscribe(data => this.foodItems = data);
  }

  getItems(event: any) {
    // Reset items back to all of the items
    this.initializeFoodItems();

    // set val to the value of the searchbar
    let value = event.target.value;

    // if the value is an empty string don't filter the items
    if (value && value.trim() != '') {
      this.foodItems = this.foodItems.filter(item => {
        return (item[3].toLowerCase().indexOf(value.toLowerCase()) > -1);
      })

      this.showAutocomplete = true;
    } else {
      this.showAutocomplete = false;
    }
  }

  addItem(item) {
    this.meal.food.push(item);
  }

  removeItemAt(index) {
    this.meal.food.splice(index, 1);
  }

  save() {
    // TODO
  }
}
