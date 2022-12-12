import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { issuebook } from '../issuebooks/issuebook';
import { ViewissueserviceService } from '../viewissuedbooks/viewissueservice.service';
import { ReturnserviceService } from './returnservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Viewbooks } from '../viewbooks/viewbooks';
import { FindValueOperator } from 'rxjs/internal/operators/find';
@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {
 callno!:string;
 Studentid!: number;
 returnForm = new FormGroup(
  {
    Callno:new FormControl('',[Validators.required]),
    studentid:new FormControl('',[Validators.required]),
  })
 Issuebook!:issuebook[];
 book!:Viewbooks[];
 get Callno(){ 
  return this.returnForm.get('Callno')?.value
}
get studentid(){ 
  return this.returnForm.get('studentid')?.value
}
  constructor(private location:Location,private returnBook:ReturnserviceService ) { 
   
  }

  ngOnInit(): void {
    
  }
back():void{
  this.location.back();
  
}
return():void
  { let flag=0;
    this.Issuebook=this.returnBook.returnissuebook();
    this.book=this.returnBook.returnbook();
      for(let b of this.Issuebook){
        if(b.callno==this.callno && b.stu_id==this.studentid)
        { 
           flag=1;
           b.returnstatus="yes";
           this.returnBook.updateStatus(b).subscribe();
           this.returnBook.Find(b.callno);
           break;
      } }
      if(flag==0)
      {
        alert("Invalid callno or studentid");
      }
      else{
        alert("Book Returned Successfully!!");
      }
      this.returnForm.reset();
  }
}
