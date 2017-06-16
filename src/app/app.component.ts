import {Component} from '@angular/core';
import {LoadingController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthProvider} from "../providers/auth/auth";
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  loader: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public loadingCtrl: LoadingController,
              public authProvider: AuthProvider) {

    this.presentLoading();
    this.authProvider.login().then((isLoggedIn) => {
      if (isLoggedIn) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
      this.loader.dismiss();
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authentication",
    });
    this.loader.present();
  }
}

