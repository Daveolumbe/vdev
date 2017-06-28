import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { User } from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loader: any;
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,  public loadingCtrl: LoadingController) {

  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authentication",
    });
    this.loader.present();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  async login(user: User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

      if(result){
        this.presentLoading();
        this.navCtrl.setRoot('HomePage');
        this.loader.dismiss();
      }
    }
    catch (e){
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
