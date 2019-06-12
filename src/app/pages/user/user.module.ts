import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {RouterModule, Routes} from '@angular/router';

import {MatTableModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', component: UserComponent },

];

@NgModule({
  declarations: [
      UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    HttpClientModule
  ]
})

export class UserModule { }
