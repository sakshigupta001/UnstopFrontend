import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: number;
  email!: string;
  password!: string;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^emilys$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false],
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.router.navigate(['home']);
    }
  }

  onLogin()
  {

    const formData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      email: this.loginForm.value.email,
      expiresInMins: 30,
    };

    this.http.post('https://dummyjson.com/auth/login', formData)
        .subscribe({
          next: (response: any) => {
            console.log('Login Successful', response);
            localStorage.setItem('authToken', response.accessToken);  // Store token
            localStorage.setItem('userData', JSON.stringify(response));  // Store entire user object
            this.router.navigate(['home']);  

          },
          error: (error) => {
            console.error('Login Failed', error);
          }
        });
    } 

  }//submit



