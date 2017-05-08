import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MealPage } from '../pages/meal/meal';
import { AddMealPage } from '../pages/add-meal/add-meal';
import { AchePage } from '../pages/ache/ache';
import { AddAchePage } from '../pages/add-ache/add-ache';
import { StatisticsPage } from '../pages/statistics/statistics';
import { TabsPage } from '../pages/tabs/tabs';

import { FoodService } from '../services/food.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AddMealPage,
    MealPage,
    AddAchePage,
    AchePage,
    StatisticsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddMealPage,
    MealPage,
    AddAchePage,
    AchePage,
    StatisticsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    FoodService
  ]
})
export class AppModule {}
