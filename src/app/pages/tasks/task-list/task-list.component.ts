import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../services/task.service';
import {TasksModel} from '../tasks-model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  displayedColumns = ['Title', 'Description', 'AssignTo'];
  tasks: TasksModel[];
  dataSource = null;

  constructor(private taskService: TaskService, private userService: UserService) {
  }

  ngOnInit() {
    this.taskService.ListTasks().subscribe(
        (tasklist: TasksModel[]) => {
          this.tasks = tasklist;
          console.log('rtas', this.tasks);
          // this.tasks.forEach(obj => {
          //  // const name = this.userService.SingleUser(obj.userid);
          //   console.log('name of assigne', name);
          // });
        }
    );
  }

}


