import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserModel} from '../pages/user/user-model';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // gender = '1';
  user = new UserModel();
  constructor(private userHandler: UserService, private authenticate: AuthService) { }

  ngOnInit() {
  }

  register(regForm: NgForm) {
    if (regForm.valid) {
        this.user.role = 'user';
        console.log(this.user);
        // this.userHandler.SaveUser(this.user).subscribe(
        //     (response: Response) => {
        //             console.log(response);
        //     }
        // );
        const param = JSON.parse(JSON.stringify(this.user));
        this.authenticate.RegisterUser(param);
        // this.userHandler.SaveUser(param)
        //     .then(res => {
        //         regForm.resetForm();
        //     });

    }
  }
}
