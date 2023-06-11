import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

export class User {
  constructor(
    public firstName: string,
    public secondName: string,
    public phoneNumber: string,
    public adresses: string,
    public dateOfBirth: Date,
    public picture: string,
    public id: number
  ) {}
}

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  startDate: string | undefined;
  endDate: string | undefined;
  displayDate: boolean = false;
  searchTerm: string = '';
  usersLi: User[] = [];
  filteredResults: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.usersLi = users;
        this.filterUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitDates() {
    if (this.startDate && this.endDate) {
     
      if (this.isStartDateBeforeEndDate(this.startDate, this.endDate)) {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        this.userService.searchByDate(start, end).subscribe(
          (users: User[]) => {
            this.usersLi = users;
            this.displayDate = true;
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.displayDate = false;
      }
    }
  }

  isStartDateBeforeEndDate(startDate: string, endDate: string): boolean {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return start < end;
  }

  filterUsers() {
    
    this.filteredResults = this.usersLi.filter(
      (user) =>
        user.adresses.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.secondName.toLowerCase().includes(this.searchTerm.toLowerCase())
        
    );
    this.filteredResults.forEach((user) => {
      console.log(user);
    });
  }

  navigateToUserModification(userId: number) {
    this.router.navigate(['userModification', userId], { relativeTo: this.route });
  }

  getUserImage(picture: string): string {
    if (picture.startsWith('data:image/jpeg;base64,')) {
      return picture;
    }
    return 'data:image/jpeg;base64,' + picture;
  }
}