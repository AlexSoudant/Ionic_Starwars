import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Facts } from './../../interfaces/facts.interface';

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

  constructor(db: AngularFirestore) {
    this.db = db;
    //this.itemsCollection = db.collection<Facts>(this.NEWS_DB_PATH);
    //this.items = this.itemsCollection.valueChanges();
  }

  get(fct?: any) {
    return this.db.collection<Facts>(this.NEWS_DB_PATH, fct).valueChanges();
  }

  getAll(): Observable<Facts[]> {
    return this.get();
  }

  getRandom(): Observable<Facts[]> {
    return this.get((ref => ref.orderBy('random').limitTo(1)));
  }


}
