import { Component, OnInit } from '@angular/core';
import { AuditService } from '../audit.service';
import { AuditResponse } from '../auditResponse.model';

@Component({
  selector: 'app-audit-severity',
  templateUrl: './audit-severity.component.html',
  styleUrls: ['./audit-severity.component.css']
})
export class AuditSeverityComponent implements OnInit {

  auditResponse !: AuditResponse;

  constructor( private auditService : AuditService) { }

  ngOnInit(): void {

    console.log("In severity Component");

    this.auditResponse = new AuditResponse();
    this.auditService.getSeverity()
    .subscribe((data)=>{
                        console.log(data);
                        this.auditResponse = data;
                        },
                        (error : any)=>{console.log(error);}
              );
  }

}
