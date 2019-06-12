import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCardModule,
    MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatListModule,
    MatMenuModule, MatNativeDateModule,
    MatProgressSpinnerModule, MatRadioModule, MatSidenavModule,
    MatTableModule, MatToolbarModule
} from '@angular/material';

import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { PagesComponent } from './pages/pages.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
     // UserComponent,
    LoginComponent,
    RegistrationComponent,
    // DashboardComponent,
    PagesComponent,
    SideNavComponent,
    // TaskListComponent,
    // TasksComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCardModule,
        MatFormFieldModule,
        MatListModule,
        MatRadioModule,
        MatSidenavModule,
        MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
