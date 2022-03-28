import { Reimbursement } from './../models/reimbursement.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private http: HttpClient) { }

  addCase(reimbursementModel: Reimbursement): Observable<Reimbursement> {
    const formData = new FormData();
    formData.append('file', reimbursementModel.file);
    formData.append('amount', '' + reimbursementModel.reimbursementAmount);
    formData.append('userId', '' + reimbursementModel.reimbursementApplicantID);
    formData.append('description', '' + reimbursementModel.reimbursementDescription);
    return this.http.post<Reimbursement>("http://localhost:3030/api/reimbursements/add", formData);
  }

  fetchAnEmployee(statusid: number): Observable<Reimbursement> {
    return this.http.get<Reimbursement>("http://localhost:3030/api/msbons" + statusid);
  }

  fetchSpecificEmployee(uid: number, statusid: number): Observable<Reimbursement> {
    return this.http.get<Reimbursement>("http://localhost:3030/api/msbons" + uid + statusid);
  }

  searchReimbursements(empid: number | undefined): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>("http://localhost:3030/api/reimbursements/search?empId=" + empid);
  }

  getAllReimbursements(): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>("http://localhost:3030/api/reimbursements");
  }

  updateReimbursements(reimid: number | undefined, statusid: number | undefined): Observable<any> {
    return this.http.put<any>("http://localhost:3030/api/reimbursements/update", {
      "reimbursementsID": reimid,
      "reimbursementsStatusID": statusid
    });
  }

  downloadImage(imageId: number | undefined): Observable<any> {
    const httpOptions = {
      'responseType': 'arraybuffer' as 'json'
      //'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.get<Reimbursement[]>("http://localhost:3030/api/reimbursements/download/" + imageId, httpOptions);
  }

}