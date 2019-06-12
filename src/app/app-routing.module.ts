import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {SideNavComponent} from './side-nav/side-nav.component';

const routes: Routes = [
  // loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)

  // { path: 'user', component: UserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {path : '', component : LoginComponent},
  {path : 'app', component: SideNavComponent, children: [ // LazyLoading
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path : 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule) },
      { path: 'user', loadChildren: () => import('./pages/user/user.module').then(mod => mod.UserModule) },
      { path: 'addtasks', loadChildren: () => import('./pages/tasks/tasks.module').then(mod => mod.TasksModule) },
      { path: 'task_list', loadChildren: () => import('./pages/tasks/task-list/task-list.module').then(mod => mod.TaskListModule) },
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
