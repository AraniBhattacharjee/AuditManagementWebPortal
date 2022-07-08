import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditSeverityComponent } from './audit-severity/audit-severity.component';
import { AuditTypeComponent } from './audit-type/audit-type.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo: 'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'auditType',component: AuditTypeComponent},
  {path:'checklist',component: ChecklistComponent},
  {path:'signup',component: SignupComponent},
  {path:'logout',component: LogoutComponent },
  {path:'auditSeverity',component: AuditSeverityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
