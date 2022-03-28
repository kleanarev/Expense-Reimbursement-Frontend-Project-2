import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  toggleAdd: boolean = false;
  constructor(private userService: UserService, private authService: AuthService) { }
  userId: number | undefined = 0;
  editInfo: User = {
    email: ""
  }

  toggleAddForm() {
    if (this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }

  ngOnInit(): void {
    this.userId = this.authService.retrieveUser().userID;
  }

  updateEmployeeInfo() {
    this.editInfo.userID = this.userId;
    this.userService.updateEmployeeInfo(this.editInfo).subscribe((response) => {
      if (response.message == "Success") {
        this.userService.getUser(this.userId).subscribe((userData) => {
          this.authService.storeUser(userData);
        }
        )
      }

    });
  }

}