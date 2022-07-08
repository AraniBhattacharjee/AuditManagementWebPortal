import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditService } from '../audit.service';

@Component({
  selector: 'app-audit-type',
  templateUrl: './audit-type.component.html',
  styleUrls: ['./audit-type.component.css']
})
export class AuditTypeComponent implements OnInit {

  constructor(private auditService : AuditService, private  router : Router) { }

  ngOnInit(): void {
  }
  
  auditType(audit : string){

    this.auditService.setAuditType(audit);
    console.log('audit type set :'+audit);
    this.router.navigate(['/checklist']);
  }

}
