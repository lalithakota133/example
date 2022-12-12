

import { ViewserviceService } from './../viewlibrarian/viewservice.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';
import { Libdetails } from '../viewlibrarian/libdetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    pass!:string;
    user!:string;
    libuser!:string;
    libpass!:string;
    librarian:Libdetails[]=[];
    ngOnIt():void{
      
      
      
}
 loginForm=new FormGroup({
  adminuser:new FormControl("",Validators.required),
  adminpass:new FormControl("",Validators.required),
  libuser:new FormControl("",Validators.required),
  libpass:new FormControl("",Validators.required)
})
getadminuser(){return this.loginForm.get('adminuser')?.value}
getlibuser():string{return this.loginForm.get('libuser')?.value}
getlibpass():string{return this.loginForm.get('libpass')?.value}
getadminpass():string{return this.loginForm.get('adminpass')?.value}

  constructor(private router:Router,private route:ActivatedRoute,private lib:ViewserviceService) {
   }
adminLogin():any{
    if(this.getadminuser()=="admin" && this.getadminpass()=="admin123")
    {
     this.router.navigate(["./adminpage"],{ relativeTo: this.route });
    }
    else{
      alert("Invalid Username  or Password!!")

    }
}
  LibLogin(): void{
    let flag=0;
    this.lib.getLibrarian().subscribe(
      data =>{this.librarian=data});
     
    for(let libr of this.librarian){
     if(this.getlibuser()==(libr.mail) && this.getlibpass()==libr.password){
       flag=1;
      this.router.navigate(['./libpage'],{ relativeTo: this.route });
       break;
     }}
     if(flag==0){
      alert("Invalid Username  or Password!!")
    }

   }
}










