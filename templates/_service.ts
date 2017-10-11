import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private afs: AngularFirestore) { }

  get(): Observable<any> {
   return this.afs.collection<any>('{{camelCase name}}').valueChanges();
  }

}
