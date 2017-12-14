import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the MoviedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html',
})
export class MoviedetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBackToPreviousPage(){
   this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedetailsPage');
  }

}
