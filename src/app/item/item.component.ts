import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from './../User';
import { UserService } from './../user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id = "";
  user; user1; user2;
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }
  goBack() {
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => { console.log(params) });
    this.user1 =this.userService.getTable1users(); 
    this.user2 = this.userService.getTable2users();
    this.user1.forEach(function (val) {
      if ((this.id) == (val.id))
        this.user = val;
    }, this); 
    if (this.user == null)
      this.user2.forEach(function (val) {
        if ((this.id) == (val.id))
          this.user = val;
      }, this);

  }




}