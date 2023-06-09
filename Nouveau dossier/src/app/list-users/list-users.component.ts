import { Component, OnInit } from '@angular/core';

export class User {

  constructor(
    public firstName: string,
    public secondName: string,
    public adresses: string,
    public DateOfBirth: Date,
    public phoneNumber: string) { }

}


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})







export class ListUsersComponent implements OnInit {

  users = [new User("feee", "zdzdzd", "deezee", new Date(Date.now()), "edefe"),
  new User("rf", "zdzdzeefd", "deezee", new Date(Date.now()), "edefe"),
  new User("feee", "zdzdzd", "deezee", new Date(Date.now()), "edefe")]

  ngOnInit() {

  }
  constructor() {

  }

}
