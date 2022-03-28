export interface Reimbursement {
    reimbursementID?: number,
    reimbursementAmount?: number,
    reimbursementSubmitTime?: string,
    reimbursementResolvedTime?: string,
    reimbursementDescription?: string,
    reimbursementApplicantID?: number,
    reimbursementStatusID?: number;
    file?: any;
    imagePath?:string;
    imageId?:number;
}