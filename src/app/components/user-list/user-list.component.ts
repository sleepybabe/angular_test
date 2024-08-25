import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  resources: any[] = [];

  constructor(private appService: AppService,  private router: Router) { }

  ngOnInit(): void {
    this.appService.getUsers().subscribe((data: any) => {
      this.users = data.data;
    });

    this.appService.getResources().subscribe((data: any) => {
      this.resources = data.data;
    });
  }

  deleteUser(id: number): void {
    this.appService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  getUserDetails(id: number): void {
    this.router.navigate(['/user', id]);
  }
}
