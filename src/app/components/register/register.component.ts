import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string | null = null;

  constructor(private appService: AppService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    const { firstName, lastName, email, password } = form.value;

    this.appService.registerUser({ firstName, lastName, email, password }).subscribe(
      {
        next: (response: any) => {
          // Optionally handle successful registration (e.g., redirect to login)
          this.router.navigate(['/login']);
        },
        error: (response: any) => {
          this.errorMessage = 'Registration failed';
          console.error(response);
        }
      },
    );
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
