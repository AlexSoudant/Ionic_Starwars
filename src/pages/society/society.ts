import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ContactForm } from '../../interfaces/contactForm.interface';

import { FormProvider } from './../../providers/form/form';

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

  private first_name: string;
  private last_name: string;
  private email: string;
  private message: string;

  constructor(public formProvider: FormProvider, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
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
  };

  sendMessage() {
    
    console.log("sendMessage", this.first_name, this.last_name)
    let message= {"first_name": this.first_name, "last_name": this.last_name, "email": this.email, "message": this.message}
    this.formProvider.pushMessage(message)
    this.presentAlert()
  };

}
