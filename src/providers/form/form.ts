import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ContactForm } from '../../interfaces/contactForm.interface';

/*
  Generated class for the FactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FormProvider {

  private FORM_DB_PATH: string = "contactForm";
  private itemsCollection: AngularFirestoreCollection<ContactForm>;
  private items: Observable<ContactForm[]>;
  private db: AngularFirestore;


  constructor(db: AngularFirestore) {
    this.db = db;
    this.itemsCollection = this.db.collection<ContactForm>(this.FORM_DB_PATH);
    // this.items = this.itemsCollection.valueChanges();
  }

  pushMessage(item: ContactForm): Promise<any> {
    return this.itemsCollection.add(item);
  }
}
