import { Injectable } from '@angular/core';
import {UserModel} from '../pages/user/user-model';
import * as firebase from 'firebase';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  RegisterUser(newUser: UserModel) {
    try {
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then( (user) => {
              console.log(user);
              console.log(user.user.uid);
              // firebase.database().ref('users/' + user.user.uid).set({
              //   email: newUser.email,
              //   firstName: newUser.firstName,
              //   lastName: newUser.lastName,
              //   gender: newUser.gender,
              //   role: newUser.role,
              //   userid: user.user.uid
              //
              // });
              newUser.userid = user.user.uid;
              this.userService.SaveUser(newUser);
            })
          .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

      });
    } catch (e) {

    }

  }

  LoginUser(userdetail: UserModel) {
      firebase.auth().signInWithEmailAndPassword(userdetail.email, userdetail.password){

      }
  }
}
