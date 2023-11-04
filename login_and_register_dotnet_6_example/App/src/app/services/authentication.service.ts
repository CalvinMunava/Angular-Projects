import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../classes/response';
import { environment } from 'src/environments/environment';
import { UserViewModel } from '../classes/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = "Authenticate/"
  showMenu: boolean = false;
  constructor(private http:HttpClient) { }

  public registerUser(user:UserViewModel)
  {
    return this.http.post<Response>(environment.apiUrl + this.apiUrl + "register", user);
  }

  public loginUser(user:UserViewModel)
  {
    return this.http.post<Response>(environment.apiUrl + this.apiUrl + "login", user).pipe(tap( res => {
      res.Status == "Success";
      this.showMenu = true;
    }));
  }

  
}
