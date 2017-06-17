import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  slides = [
    {
      title: "Welcome to the Visilinx!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "../../assets/logo-ion.png",
    },
    {
      title: "Be a great host",
      description: "<b>Hosts</b>  are automatically notified of visitor arrival via email, SMS and the Visilinx smart phone App.",
      image: "../../assets/slide2.png",
    }
    // {
    //   title: "What is Ionic Cloud?",
    //   description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
    //   image: "../../assets/slide3.png",
    // }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(){
    this.navCtrl.setRoot('LoginPage');
  }

}
