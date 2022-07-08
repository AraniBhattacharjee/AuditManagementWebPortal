import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuditTypeComponent } from './audit-type/audit-type.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AuditSeverityComponent } from './audit-severity/audit-severity.component';
import { AuthInterceptor } from './authInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuditTypeComponent,
    ChecklistComponent,
    SignupComponent,
    LogoutComponent,
    AuditSeverityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
