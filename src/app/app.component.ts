import { Component } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { Location } from  '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskMangement';

  constructor() {
  }
}
