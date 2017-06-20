import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {EstateProvider} from "../../providers/estate/estate";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  guestPin: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private toasrt: ToastController,
              private estateService: EstateProvider) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {

        this.getMessage(data.email);
        this.toasrt.create({
          message: `Welsome to Visilinx, ${data.email}`,
          duration: 3000
        }).present();
      } else {
        this.toasrt.create({
          message: `Could not find authentication details`,
          duration: 3000
        }).present();
      }
    });
  }

  checkGuestIn() {
    if (!this.guestPin) {
      return false;
    } else {
      this.estateService.checkInGuest(this.guestPin).subscribe(data => console.log(data))
    }
  }

  getMessage(value) {
    this.estateService.getAllData(value).subscribe(data => console.log(data));
  }

}
