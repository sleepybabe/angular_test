import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private appService: AppService, private router: Router, private appComponent: AppComponent) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    const { email, password } = form.value;

    this.appService.loginUser({ email, password }).subscribe(
      {
        next: (response: any) => {
          localStorage.setItem('authToken', response.token); 
          this.appComponent.updateLoginStatus();
          this.router.navigate(['/users']);
        },
        error: (response: any) => {
          this.errorMessage = 'Login failed';
          console.error(response);
        }
      },
    );
  }

  goToSignup(): void {
    this.router.navigate(['/register']);
  }
}
