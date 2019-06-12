import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TasksModel} from '../pages/tasks/tasks-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  SaveTask(newTask: TasksModel) {
    return this.http.post('https://taskmanagement-987c0.firebaseio.com/tasks.json', newTask);
  }

  ListTasks() {
    return this.http.get('https://taskmanagement-987c0.firebaseio.com/tasks.json');
  }
}
