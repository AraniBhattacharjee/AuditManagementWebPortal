import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorisationService } from '../authorisation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName !: string;
  password !: string;
  flag !: boolean;
  validCred : string ="";

  constructor(private authService : AuthorisationService , private  router : Router) { }

  ngOnInit(): void {
  }

  submit(){

    this.authService.login(this.userName,this.password)
    .subscribe((data:any): void=>{
                        console.log(data);
                        console.log("Login Successful");
                        this.router.navigate(['/auditType'])
                      },
              (error:any)=>{
                console.log(error);
                this.validCred = "INVALID CREDENTIALS!!!";
                this.router.navigate(['/login']);
              });

  }

}
