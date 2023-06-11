import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
export class User {
  constructor(
    public firstName: string,
    public secondName: string,
    public phoneNumber: string,
    public adresses: string,
    public dateOfBirth: Date,
    public picture: string,
    public id: number
  ) 
  {}
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
   user = new User(
    '',
    '',
    '',
    '',
    new Date('1990-01-01'),
    '',
    1
  );
  displayedImage: string | undefined;
  
  constructor(private userService: UserService, private router: Router) {}
  
  createUser() {
    // Vérifiez d'abord si l'utilisateur est défini
    if (this.user) {
      // Envoyer une requête POST pour créer l'utilisateur
      this.userService.createUser(this.user).subscribe(
        (response) => {
          // Traitement de la réponse de la requête
          console.log('Utilisateur créé avec succès', response);
          this.router.navigate(['/']);
        },
        (error) => {
          // Gestion des erreurs de la requête
          console.error('Erreur lors de la création de l\'utilisateur', error);
          // Autres actions à effectuer en cas d'erreur
        }
      );
    }
  }

  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onloadend = () => {
        // Convertir l'image en base64
        const base64Image = reader.result as string;
        this.user.picture = base64Image;
        this.displayedImage = base64Image;
      };
      reader.readAsDataURL(file);
    }
  }
}  