import { Component, OnInit } from '@angular/core';
import { Viewbooks } from './viewbooks';
import { Location } from '@angular/common';
import { ViewbookserviceService } from './viewbookservice.service';
@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
  test:Viewbooks[]=[
  ];
 
 

  constructor(private location:Location ,private viewbooksservice:ViewbookserviceService) { }

  ngOnInit(): void {
    this.listbooks();
  }
back() :void{
  this.location.back();
}
listbooks(){
  this.viewbooksservice.getBooks().subscribe(
    data =>{
      this.test= data;
    }
  )
}
}
