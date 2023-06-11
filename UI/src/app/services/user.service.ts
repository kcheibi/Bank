import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../list-users/list-users.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/'; 

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+'getUser');
  }
  deleteUser(id: number) {
    const url = `${this.baseUrl}delete/${id}`;
    console.log(url);
    return this.http.delete(url).subscribe(
      response => {
        console.log('Suppression réussie :', response);
        // Traitez la réponse ici si nécessaire
      },
      error => {
        console.error('Erreur lors de la suppression :', error);
        // Traitez l'erreur ici si nécessaire
      }
    );
  }
  updateUser(user: User): Observable<any> {
    const url = `${this.baseUrl}update/${user.id}`;
    return this.http.put(url, user);
  }

  getUserById(id:number): Observable<User> {
    const url = `${this.baseUrl}UserById/${id}`;
    return this.http.get<User>(url);
  }

  createUser(user: User):Observable<any> {
    const url = `${this.baseUrl}createUser`;
    return this.http.post(url, user);
  } 

  searchByDate(start: Date, end :Date):Observable<User[]> {
    const url = `${this.baseUrl}UserById/${start}/${end}`
    return this.http.get<User[]>(url);
  }

  

}