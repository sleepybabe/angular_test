import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.appService.getUser(userId).subscribe((data: any) => {
      this.user = data.data;
    });
  }

  updateUser(): void {
    this.appService.updateUser(this.user.id, this.user).subscribe((data: any) => {
    });
  }
}
