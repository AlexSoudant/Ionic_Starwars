import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FactsProvider } from './../../providers/facts/facts';
import { Observable } from 'rxjs/Observable';
import { Facts } from '../../interfaces/facts.interface';

import { WordsProvider } from './../../providers/words/words';
import { Words } from '../../interfaces/words.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public randomFacts: Facts;
  public allWords: Observable<Words[]>;

  constructor(public factsProvider: FactsProvider, wordsProvider: WordsProvider) {

    factsProvider.getRandom().then(res => this.randomFacts = res).catch(error => console.error(error));
    this.allWords = wordsProvider.getAll();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

}
