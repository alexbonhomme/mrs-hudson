import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddAchePage } from '../add-ache/add-ache';

@Component({
  selector: 'page-ache',
  templateUrl: 'ache.html'
})
export class AchePage {

  constructor(public navCtrl: NavController) {}

  addAche() {
      this.navCtrl.push(AddAchePage);
  }
}
