import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

export class User {

  constructor(
    public  firstName : string,
    public secondName : string ,
    public  phoneNumber :string,
    public adresses: string ,
    public dateOfBirth: Date ,
    public picture: string  ,
    public id : number) { }
    
}


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})







export class ListUsersComponent implements OnInit {

  users: User[] | undefined;
  constructor(
    private userService: UserService,
    private router : Router
  ) {

  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users +"efeeff")
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUserImage(picture: string) {
    if (picture.startsWith('data:image/jpeg;base64,')) {
      return picture;
    }
    return 'data:image/jpeg;base64,' + picture;
  }

  createUser(){
    this.router.navigate(['/createUser']);
  }
  // Method to delete a user
  deleteUser(user: any): void {
    this.userService.deleteUser(user.id);
    window.location.reload();
  }

  // Method to modify a user
  modifyUser(user: any): void {
    this.router.navigate(['/userModification/', user.id]);
  }

  
  }
  
  
    

