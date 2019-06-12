import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {TasksComponent} from './tasks.component';
import {
  MatButtonModule,
  matFormFieldAnimations,
  MatFormFieldModule,
  MatInputModule, MatOption, MatOptionModule,
  MatRippleModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: TasksComponent },

];

@NgModule({
  declarations: [
    TasksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule
  ]
})
export class TasksModule { }
