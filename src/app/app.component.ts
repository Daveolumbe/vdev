import {Component} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthProvider} from "../providers/auth/auth";
import {WelcomePage} from "../pages/welcome/welcome";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = WelcomePage;

  constructor(pstatusBar: StatusBar, splashScreen: SplashScreen, public authProvider: AuthProvider) {


  }


}

