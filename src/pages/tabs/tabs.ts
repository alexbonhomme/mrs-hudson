import { Component } from '@angular/core';
import { Tab } from 'ionic-angular';

import { MealPage } from '../meal/meal';
import { AchePage } from '../ache/ache';
import { StatisticsPage } from '../statistics/statistics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  statisticsPage = StatisticsPage;
  mealPage = MealPage;
  achePage = AchePage;

  tabsColor = 'primary';

  tabSelected(tab: Tab) {
    switch (tab.index) {
      case 0:
        this.tabsColor = 'statistics';
        break;

      case 1:
        this.tabsColor = 'meal';
        break;

      case 2:
        this.tabsColor = 'ache';
        break;

      default:
        break;
    }
  }
}
