import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuditService } from '../audit.service';
import { AuditDetail } from '../auditDetail.model';
import { AuditRequest } from '../auditRequest.model';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  questionList! : Observable<string>;
  ansList : string[] = [];
  projectName !: string;
  projectManagerName !: string;
  appOwnerName !: string;
  auditDetail !: AuditDetail;
  auditRequest !: AuditRequest;
  date !: string;

  constructor( private auditService : AuditService, private router : Router) {  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("In checklist component");
    this.questionList = this.auditService.getAuditQuestions();
  }

  submittedAns(index:number, e : any){

    //console.log(index);
    //console.log(e.target.value);

    this.ansList[index] = e.target.value;
    

  }

  submit(){

    console.log("form submitted");

    console.log(this.appOwnerName);
    console.log(this.projectManagerName);
    console.log(this.projectName);
    console.log(this.date);

    this.auditRequest = new AuditRequest();
    this.auditRequest.appOwnerName = this.appOwnerName;
    this.auditRequest.projectName = this.projectName;
    this.auditRequest.projectManagerName = this.projectManagerName;

    this.auditDetail = new AuditDetail();
    this.auditDetail.date = this.date;
    this.auditDetail.auditType = this.auditService.auditType;
    this.auditDetail.questions = getNumberOfNo(this.ansList);

    console.log("Audit details obj created");

    this.auditRequest.auditDetail = this.auditDetail;

    console.log("Audit req obj created");

    this.auditService.setAuditRequest(this.auditRequest);

    this.router.navigate(['/auditSeverity']);
  }

}
function getNumberOfNo(ansList: string[]): number {
  
  let count = 0;
  for(let i=0;i<ansList.length;i++){
    if(ansList[i] === "no")
      count++;
   }

   console.log("No of no:" + count);
   return count;
}

