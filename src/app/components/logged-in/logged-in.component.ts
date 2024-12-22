import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
  }

  onLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    this.router.navigate(['auth/login']);
  }

}
