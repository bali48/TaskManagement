import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TasksModel} from '../pages/tasks/tasks-model';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {UserService} from './user.service';
import {loggedIn} from '@angular/fire/auth-guard';
import {timeout} from 'q';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    localtask = null;
  constructor(private http: HttpClient, private firestore: AngularFirestore, private userService: UserService) { }

  SaveTask(newTask: TasksModel) {
    // return this.http.post('https://taskmanagement-987c0.firebaseio.com/tasks.json', newTask);
    return new Promise<TasksModel>((resolve, reject) => {
      this.firestore
          .collection('tasks')
          .add(newTask)
          .then(res => {}, err => reject(err));
    });
  }

  ListTasks() {

    // return this.http.get('https://taskmanagement-987c0.firebaseio.com/tasks.json');
      this.firestore.collection('tasks').snapshotChanges().toPromise()
          .then(
        (tasks) => {
          console.log('Before', tasks[0].payload.doc.data());

          tasks.forEach(obj => {
                this.localtask = this.firestore.collection('users')
                  .doc(obj.payload.doc.data()['userid'])
                  .get().toPromise().then((doc) => {
                  if (doc.exists) {
                      obj['user'] = doc.data();
                      // console.log('Document data:', doc.data());
                  } else {
                      // doc.data() will be undefined in this case
                      obj['user'] = null;
                      // console.log('No such document!');
                  }
              });
                this.localtask.push(obj);
            });


          console.log(this.localtask);
          return this.localtask;
          });



      // return this.firestore.collection('tasks').snapshotChanges();
  }
}
