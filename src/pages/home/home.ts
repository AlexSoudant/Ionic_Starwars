import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FactsProvider } from './../../providers/facts/facts';
import { Observable } from 'rxjs/Observable';
import { Facts } from '../../interfaces/facts.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  RandomFacts: Observable<Facts[]>;
  
    constructor(public factsProvider: FactsProvider) {
  
      this.RandomFacts = factsProvider.getRandom();
  
    }
  

}
