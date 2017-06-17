import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../models/user";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private aFuth: AngularFireAuth) {
  }

  async signUp(user: User){
    try {
      const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }

  }

}
