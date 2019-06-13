import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../../../services/task.service';
import {TasksModel} from '../tasks-model';
import {UserService} from '../../../services/user.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {timeout} from 'q';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  displayedColumns = ['Title', 'Description', 'AssignTo'];
  tasks;
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatSort) sort: MatSort;

  constructor(private taskService: TaskService, private userService: UserService, private firestore: AngularFirestore) {
  }

  ngOnInit() {
      this.tasks = this.taskService.ListTasks();
      console.log(this.tasks);
      this.dataSource = new MatTableDataSource(this.tasks);
      this.dataSource.sort = this.sort;
  }

}


