import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the GuestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  private guestName: string = '';
  private userId: string = '';
  private visiting: string = '';
  private address: string = '';
  private arrivalDate: string = '';
  private leavingDate: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage ' + JSON.stringify(this.navParams.get('data')));
    let data = this.navParams.get('data');
    this.guestName = data[0].VisitorName;
    this.userId = data[0].UserId;
    this.visiting = data[0].Visiting;
    this.address = data[0].Address;
    this.arrivalDate = data[0].ArrivalDate;
    this.leavingDate = data[0].LeavingDate;


    this.displayGuestInfo();
  }

  displayGuestInfo() {

  }

}
