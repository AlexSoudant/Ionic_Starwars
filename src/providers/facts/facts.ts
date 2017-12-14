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


  constructor(db: AngularFirestore) {
    this.db = db;
    this.itemsCollection = db.collection<Facts>(this.NEWS_DB_PATH);
    this.items = this.itemsCollection.valueChanges();

  }


  getAll(): Observable<Facts[]> {
    return this.items;
  }

  getRandom(): Promise<Facts> {
    console.log('test');
    return new Promise((resolve, reject) => {
      this.items.toPromise().then(allFacts => {
        let res: Facts;
        if (allFacts.length === 0) {
          res = { text: 'mhhh' };
          //resolve();
        } else {
          let rindex = Math.floor((Math.random() * allFacts.length));
          res = allFacts[rindex];
        }
        resolve(res);
        //resolve(allFacts.length === 0 ? { text: null } : allFacts[Math.floor((Math.random() * allFacts.length))]);

      }).catch(err => {
        console.error(err);
        reject(err);
      });
    });
  }


}
