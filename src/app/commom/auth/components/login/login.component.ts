import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Login } from '../../models/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  // loginForm!: FormGroup; 
  // authLogin!: Login;

  constructor(private AuthenticationService: AuthenticationService,
    // private formBuilder: FormBuilder,
    // private _snackBar: MatSnackBar,
    private router: Router){

  }

  ngOnInit(): void {
  }

  login(){



  }

  logout(){

  }


}
