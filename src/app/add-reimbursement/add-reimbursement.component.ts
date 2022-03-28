import { AuthService } from './../services/auth.service';
import { ReimbursementService } from './../services/reimbursement.service';
import { Reimbursement } from './../models/reimbursement.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reimbursement',
  templateUrl: './add-reimbursement.component.html',
  styleUrls: ['./add-reimbursement.component.css']
})
export class AddReimbursementComponent implements OnInit {
  toggleAdd: boolean = false;
  file: any;


  newCase: Reimbursement = {
    reimbursementAmount: 0,
    reimbursementDescription: "",
  }
  constructor(private reimbursementService: ReimbursementService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    this.addCase();
  }
  toggleAddForm() {
    if (this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }
  addCase() {
    this.newCase.reimbursementApplicantID = this.authService.retrieveUser().userID;
    this.newCase.file = this.file;
    this.reimbursementService.addCase(this.newCase).subscribe((response) => {
      console.log(response);
      this.newCase = {
        reimbursementAmount: 0,
        reimbursementDescription: "",
        reimbursementApplicantID: 0,
        reimbursementStatusID: 0
      }
    })
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
}