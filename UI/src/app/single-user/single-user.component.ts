import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Ng2ImgMaxService } from 'ng2-img-max';

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
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  userId: number | null | undefined;
  user: User | undefined;
  selectedImage: File | null = null;
  displayedImage: string | null = null;

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private ng2ImgMaxService: Ng2ImgMaxService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userIdParam = params.get('id');
      if (userIdParam !== null) {
        this.userId = +userIdParam;
        this.userService.getUserById(this.userId).subscribe(
          (user: User) => {
            this.user = user;
            this.displayedImage = this.getUserImage(user.picture);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        // Gérer le cas où l'ID est manquant
      }
    });
  }

  getUserImage(picture: string) {
    if (picture.startsWith('data:image/jpeg;base64,')) {
      return picture;
    }
    return 'data:image/jpeg;base64,' + picture;
  }


  updateUser() {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe(
        (response) => {
          // Gérer la réponse du service (succès, erreur, etc.)
          this.router.navigate(['/']);
        },
        (error) => {
          // Gérer les erreurs de la requête
        }
      );
    }
  }

  handleFileInput(event: any) {
    this.selectedImage = event.target.files[0];

    if (this.selectedImage) {
      this.ng2ImgMaxService.compressImage(this.selectedImage, 0.1).subscribe(
        (result: File) => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            this.user!.picture = event.target.result;
            this.displayedImage = this.user!.picture;
          };
          reader.readAsDataURL(result);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}