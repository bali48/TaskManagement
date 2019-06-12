import { Component, OnInit } from '@angular/core';
import {TasksModel} from './tasks-model';
import {UserService} from '../../services/user.service';
import {UserModel} from '../user/user-model';
import {NgForm} from '@angular/forms';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task = new TasksModel();
  Users = [];
  constructor(private userService: UserService, private taskService: TaskService) { }

  ngOnInit() {
    this.userService.Listuser().subscribe(
        (response: UserModel[]) => {
          const arr = Object.keys(response).map((key) => [key, response[key]]);
          this.Users = arr;
          console.log(this.Users);
        }
    );
  }

  OnSave(form: NgForm) {
    if (form.valid) {
      this.taskService.SaveTask(this.task).subscribe(
          (response: Response) => {
            console.log(response);
          }
      );
    } else {
      alert('Something Wrong with Given Inputs');
    }
  }

}
