import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_test';
  isLoggedIn = false;

  constructor(private router: Router) {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
  }

  updateLoginStatus(): void {
    this.checkAuthStatus();
  }
}
