import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  styleUrls: ['./view-user-info.component.css']
})


export class ViewUserInfoComponent implements OnInit {

  public user: User = {};

  constructor(private userService: UserService, private router: Router,
    private activatedRoute: ActivatedRoute, private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.user = this.authService.retrieveUser();
    console.log(this.user);
  }


  showRequests(userId: number | undefined) {
    console.log(userId);
    this.router.navigate(['view-reimbursement'], { queryParams: { 'empid': userId } });
  }
}