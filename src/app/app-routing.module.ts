import { AuthGuard } from './services/auth.guard';
import { CanActivate } from '@angular/router';
import { AddReimbursementComponent } from './add-reimbursement/add-reimbursement.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ViewReimbursementComponent } from './view-reimbursement/view-reimbursement.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';



const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent, canActivate: [AuthGuard] },
  { path: "view-reimbursement", component: ViewReimbursementComponent, canActivate: [AuthGuard] },
  { path: "view-all-employees", component: ViewEmployeesComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "edit-user", component: EditUserComponent, canActivate: [AuthGuard] },
  { path: "submit-reimbursement", component: AddReimbursementComponent, canActivate: [AuthGuard] },
  { path: "view-user-info", component: ViewUserInfoComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }