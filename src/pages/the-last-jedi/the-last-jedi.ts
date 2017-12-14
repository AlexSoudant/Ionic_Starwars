import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SwapiService } from 'ng2-swapi';


/**
 * Generated class for the TheLastJediPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-the-last-jedi',
  templateUrl: 'the-last-jedi.html',
})
export class TheLastJediPage {

  constructor(private swapi: SwapiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheLastJediPage');
  }

}
