import { Component/* , OnInit, Input */ } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviedetailsPage } from '../moviedetails/moviedetails';


/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ngOnInit() {

  }

  goToDetailsPage(id: string) {
    this.navCtrl.push(MoviedetailsPage, {
      filmId: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
  }
}



