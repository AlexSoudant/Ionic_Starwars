import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Facts } from './../../interfaces/facts.interface';
import { Injectable } from '@angular/core';

/*
  Generated class for the FactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FactsProvider {

  private NEWS_DB_PATH: string = "Facts";
  private itemsCollection: AngularFirestoreCollection<Facts>;
  private items: Observable<Facts[]>;
  private db: AngularFirestore;
  private allFacts: Array<Facts> = [];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.itemsCollection = db.collection<Facts>(this.NEWS_DB_PATH);
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(doc => this.allFacts = doc);
  }


  getAll(): Observable<Facts[]> {
    return this.items;
  }

  getRandom(): Facts {
    return this.allFacts.length === 0 ? { text: null } : this.allFacts[Math.floor((Math.random() * this.allFacts.length))];
  }


}
