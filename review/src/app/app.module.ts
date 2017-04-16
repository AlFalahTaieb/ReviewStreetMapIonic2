import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReviewPage } from '../pages/add-review-page/add-review-page';
import { Reviews } from '../providers/reviews';
import { BrowserModule } from '@angular/platform-browser';
 import { StatusBar } from '@ionic-native/status-bar';
 import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
     
   MyApp,
    HomePage,

    AddReviewPage
  ],
  imports: [   BrowserModule, HttpModule,

    IonicModule.forRoot(MyApp)
 

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReviewPage
  ],
  providers: [Reviews,
  StatusBar,
  SplashScreen]
})
export class AppModule {}