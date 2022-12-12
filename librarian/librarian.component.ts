import { LibrarianService } from './librarian.service';
import { AddbookComponent } from './../addbook/addbook.component';
import { addlibrarian } from './addlibrarian';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';



import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  addlibrarian:addlibrarian = new addlibrarian("","","","","",'',"");
  message:any;
  constructor(private location: Location,private librarian:LibrarianService) { }
  wholeForm=new FormGroup({
    pass:new FormControl('',Validators.required),
    finame:new FormControl('',Validators.required),
    liname:new FormControl('',Validators.required),
    emailvalid:new FormControl('',Validators.required),
    phonevalid:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required)
  })


  get finame(){
    return this.wholeForm.get("finame")
  };
  get liname(){
    return this.wholeForm.get("liname")
  }
  get emailvalid() {
    return this.wholeForm.get("emailvalid")
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

 back(): void {
    this.location.back();
  }

AddLibrarian(): void{
  let resp=this.librarian.Add(this.addlibrarian);
  resp.subscribe((data)=>this.message=data);
  alert("Librarian Added Successfully!!");
  this.wholeForm.reset();
}





}
