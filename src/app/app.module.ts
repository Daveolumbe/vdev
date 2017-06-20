import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';

import { FIREBASE_CONFIG } from './app.firebase.config';
import {WelcomePage} from "../pages/welcome/welcome";
import { EstateProvider } from '../providers/estate/estate';
import {HttpModule} from "@angular/http";
import {GuestPage} from "../pages/guest/guest";


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    GuestPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    GuestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EstateProvider
  ]
})
export class AppModule {}
