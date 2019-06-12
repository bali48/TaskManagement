import {Component, OnInit, ViewChild} from '@angular/core';
import {UserModel} from './user-model';
import {UserService} from '../../services/user.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['FullName', 'Email', 'Gender'];
  users;
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.Listuser().subscribe(
    //     (response: UserModel[]) => {
    //       this.user = response;
    //       const arr = Object.keys(this.user).map((key) => [key, this.user[key]]);
    //
    //       console.log(arr);
    //       this.dataSource = arr;
    //     }
    // );
      this.userService
          .Listuser()
          .subscribe(res => (
              this.users = res,
              console.log('res', res[0].payload.doc.data()),
            this.dataSource = new MatTableDataSource(res),
                  console.log('dataSource', this.dataSource),
                  this.dataSource.sort = this.sort
            ));
  }



}
