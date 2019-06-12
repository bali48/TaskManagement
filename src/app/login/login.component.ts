import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {timeout} from 'q';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  email: string;
  password: string;
  showSpinner = 'none';
  ngOnInit() {
  }
  login(form: NgForm) {
    // this.showSpinner = 'none';
    console.log(form.value);
    if (form.valid) {
      setTimeout(() => {
        this.showSpinner = 'block';
        if (this.email === 'admin@admin.com' && this.password === 'admin') {
          this.router.navigate(['app']);

        } else {
          alert('Invalid credentials');
        }

      }, 3000);
    }
  }
}


