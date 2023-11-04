import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserViewModel } from '../classes/user';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  constructor ( private authenticateService:AuthenticationService, private router:Router){}

  submit() {
    if (this.loginForm.valid) 
    {
      let user = new UserViewModel();
      user.emailaddress = this.loginForm.value.username;
      user.password = this.loginForm.value.password;
      
      this.authenticateService.loginUser(user).subscribe(response => 
        {
          console.log(response);
          if(response.Status == "Success")
          {
                this.router.navigateByUrl("/products")
          }
          else if ( response.Status == "Error")
          {
                   //show your error
          }
        }) 
    }
  }


}
