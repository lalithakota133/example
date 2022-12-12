import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { addlibrarian } from '../librarian/addlibrarian';
import { Location } from '@angular/common';
import { UpdateserviceService } from './updateservice.service';
import { Libdetails } from '../viewlibrarian/libdetails';
@Component({
  selector: 'app-updatelibrarian',
  templateUrl: './updatelibrarian.component.html',
  styleUrls: ['./updatelibrarian.component.scss']
})
export class UpdatelibrarianComponent implements OnInit {
  
  lib:addlibrarian=this.librarian.getmail();
  mail:string=this.lib.mail;
  updatelibrarian:addlibrarian = new addlibrarian(this.lib.l_ID,this.lib.fname,this.lib.lname,this.mail,this.lib.password,this.lib.phone,this.lib.gender);
  message:any;
  constructor(private location: Location,private librarian:UpdateserviceService) { }
  wholeForm=new FormGroup({
    pass:new FormControl('',Validators.required),
    finame:new FormControl('',Validators.required),
    liname:new FormControl('',Validators.required),
    phonevalid:new FormControl('',Validators.required),
    
    gender:new FormControl('',Validators.required)
  })

  get finame(){
    return this.wholeForm.get("finame")
  };
  get liname(){
    return this.wholeForm.get("liname")
  }
  get pass(){
    return this.wholeForm.get("pass")
  }
  get phonevalid() {
    return this.wholeForm.get("phonevalid")
  }
  get gender() {
    return this.wholeForm.get("gender")
  }
  ngOnInit(): void {
  }
 back():void{
   this.location.back();
 }
 
update()
{  this.lib.l_ID=this.updatelibrarian.l_ID;
  this.lib.fname=this.updatelibrarian.fname;
  this.lib.lname=this.updatelibrarian.lname;
  this.lib.password=this.updatelibrarian.password;
  this.lib.gender=this.updatelibrarian.gender;
  this.librarian.updateStatus(this.lib).subscribe();
   alert("Updated Successfully!!")
}
}
