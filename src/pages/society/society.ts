import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SocietyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-society',
  templateUrl: 'society.html',
})
export class SocietyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocietyPage');
  }

  errorMessage = "Error message!"
  formSettings = {
    theme: 'ios'
  };



  presentAlert() {
    let isConnected = true;

    if (isConnected) {
      let alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Your message is send',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Your message is not send',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
