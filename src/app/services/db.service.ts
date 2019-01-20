import { Injectable } from '@angular/core';
import {FireService} from './fire.service';
import { FirebaseFirestore } from '@firebase/firestore-types';
import {ProjectInfo} from '../../model';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class DBService {

  db: FirebaseFirestore;

  constructor(fire: FireService) {
    this.db = fire.fb_firestore();
  }

  readAll(path: string): ProjectInfo[] {
    const pending: ProjectInfo[] = [];

    this.db.collection(path).get().then(snap => {
      snap.forEach(doc => {
        pending.push(<ProjectInfo>doc.data());
      });
    });

    return pending;
  }

}