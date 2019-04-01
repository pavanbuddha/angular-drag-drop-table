import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { User } from './../User'
import { UserService } from './../user.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})



export class WelcomeComponent implements OnInit {

  table1: User[] = [];
  table2: User[] = [];
  constructor(private http: HttpClient, private userService: UserService) {
   // userService.fetchUsers();

  }

  ngOnInit() {

    if (this.userService.getTable1users().length == 0 && this.userService.getTable2users().length == 0) {
      this.http.get("https://randomuser.me/api/?results=20").subscribe((data) => {
//alert("jkl")
        let results = data['results'];

        results.forEach(function (value) {
          let user = new User();

          user.id = value.cell;
          user.firstName = value.name.first;
          user.lastName = value.name.last;
          user.email = value.email;
          user.phone = value.phone;
          user.picture = value.picture.large;
          this.table1.push(user);
        }, this);
        this.userService.setTable1users(this.table1);

      });

    }
    else {
//alert("dsf");
      this.table1 = this.userService.getTable1users();
      this.table2 = this.userService.getTable2users();
    }
  }


  drop(event: CdkDragDrop<object[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.userService.setTable1users(this.table1);
    this.userService.setTable2users(this.table2);
  }

}