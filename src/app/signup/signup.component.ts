import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorisationService } from '../authorisation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userName !: string;
  password !: string;

  constructor(private authService : AuthorisationService, private router : Router) { }

  ngOnInit(): void {
  }


  signup(){

    this.authService.register(this.userName,this.password)
    .subscribe((data)=>{
                        console.log(data);
                        console.log("Registration Successful");
                        this.router.navigate(['/login']);
                      },
              (error:any)=>{console.log(error)});
    

  }

}