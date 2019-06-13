import { Injectable } from '@angular/core';
import {UserModel} from '../pages/user/user-model';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserModel;
  userServiceIndicator = new  Subject<UserModel[]>();
    constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  SaveUser(newUser: UserModel) {
      /* simple storage in array
       this.user.push(newUser);
       this.userServiceIndicator.next(this.user.slice());
       */
      /* direct call to fire base
      return this.http.post('https://taskmanagement-987c0.firebaseio.com/users.json', newUser);
        */
      /* firebase sdk */
      return new Promise<UserModel>((resolve, reject) => {
          this.firestore
              .collection('users')
              .add(newUser)
              .then(res => {}, err => reject(err));
      });

  }



  Listuser() {
       // return this.http.get('https://taskmanagement-987c0.firebaseio.com/users.json');
      return this.firestore.collection('users').snapshotChanges();
    }

  SingleUser(userID: string) {
      return this.firestore.collection('users').ref.where('key', '==', userID)
          .limit(1)
          .get();

  }
}
