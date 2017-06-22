import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {EstateProvider} from "../../providers/estate/estate";
import {GuestPage} from "../guest/guest";

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
              private modalCtrl: ModalController,
              private estateService: EstateProvider) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {

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
      this.estateService.checkInGuest(this.guestPin).subscribe((data) => {
          if(data.length !== 0){
            let modal = this.modalCtrl.create(GuestPage, {data: data});
            modal.present();
          }else {
            console.error('not found')
          }

      });
    }
  }

  getMessage(value) {
    this.estateService.getAllData(value).subscribe(data => console.log(data));
  }

}
