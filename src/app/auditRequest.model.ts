import { AuditDetail } from "./auditDetail.model";


export class AuditRequest{

    projectName !: string;
    projectManagerName !: string;
    appOwnerName !: string;
    auditDetail !: AuditDetail;
}