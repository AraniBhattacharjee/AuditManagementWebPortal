import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuditDetail } from './auditDetail.model';
import { AuditRequest } from './auditRequest.model';
import { AuditResponse } from './auditResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  auditType !: string;
  auditResponse !: AuditResponse;
  auditRequest !: AuditRequest;

  

  constructor( private http : HttpClient) { }

  getAuditQuestions(): Observable<any> {
    
    //call the check list microservice

    console.log("In get question service method with audit type: "+this.auditType);
    
    return  this.http.get(`http://localhost:9091/auditChecklist/${this.auditType}`);

    
  }

  setAuditType(audit: string) {
    
    this.auditType = audit;
    console.log("Audit type set in service method");
  }

  setAuditRequest(auditRequest : AuditRequest){

    console.log("In set Audit Method");
    this.auditRequest = auditRequest;
    return;
  }

  getSeverity():Observable<any>{

    console.log("In get Severity");
    console.log(this.auditRequest);
    return this.http.post(`http://localhost:9090/severity/auditStatus`, this.auditRequest);
  }
}
