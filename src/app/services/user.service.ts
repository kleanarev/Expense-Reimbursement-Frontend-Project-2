import { Reimbursement } from './../models/reimbursement.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

import { AuthService } from './auth.service';
import { GenericResponse } from '../models/generic-reponse.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  validateUser(newUser: User): Observable<User> {
    console.log(newUser.userName);
    console.log(newUser.userPassword);
    return this.http.post<User>('http://localhost:3030/api/users/logon', {
      userName: newUser.userName,
      userPassword: newUser.userPassword
    });
  }

  fetchAllEmployee(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3030/api/users/search?roleId=1");
  }

  getUser(userId: number | undefined): Observable<User> {
    return this.http.get<User>("http://localhost:3030/api/users/getUser/" + userId);
  }


  // fetchSpecificEmployee(uid: number, statusid: number): Observable<Reimbursement> {
  //   return this.http.get<Reimbursement>("http://localhost:2020/api/msbons" + uid + statusid);
  // }

  updateEmployeeInfo(userModel: User): Observable<GenericResponse> {
    return this.http.put<GenericResponse>("http://localhost:3030/api/users/update", userModel);
  }

}