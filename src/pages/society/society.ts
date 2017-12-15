import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

// import { ContactForm } from '../../interfaces/contactForm.interface';

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

  public first_name: string;
  public last_name: string;
  public email: string;
  public message: string;
  errorMessage = "Error message!";
  formSettings = {
    theme: 'ios'
  };


  constructor(public formProvider: FormProvider, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocietyPage');
  }




  presentAlert(ok: boolean) {

    if (ok) {
      let alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Your message is send',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Oups',
        subTitle: 'Your message is not send',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  sendMessage(): void {

    console.log("sendMessage", this.first_name, this.last_name);

    let message = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      message: this.message
    };

    let loader = this.loadingCtrl.create({
      content: "sending message..."
    });

    loader.present();

    this.formProvider.pushMessage(message).then(() => {
      this.reinitMessage();
      loader.dismiss();
      this.presentAlert(true);
    }).catch(error => {
      loader.dismiss();
      console.error(error);
      this.presentAlert(false);
    });
  }

  reinitMessage(): void {
    this.first_name = null;
    this.last_name = null;
    this.email = null;
    this.message = null;
  }

}
