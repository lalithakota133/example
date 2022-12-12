import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';
import { issuebook } from '../issuebooks/issuebook';
import { Viewbooks } from '../viewbooks/viewbooks';
import { ViewbookserviceService } from '../viewbooks/viewbookservice.service';
import { ViewissueserviceService } from '../viewissuedbooks/viewissueservice.service';
@Injectable({
  providedIn: 'root'
})
export class ReturnserviceService {
  [x: string]: any;
 Issuebook: issuebook[]=[];
 book:Viewbooks[]=[];
 private baseUrl="http://localhost:8080/api/issueBooks";
 private baseUrl1="http://localhost:8080/api/books";
  constructor(private viewissue:ViewissueserviceService,private httpClient:HttpClient, private viewbook:ViewbookserviceService) { }
  returnissuebook(): issuebook[]{
    this.viewissue.getIssueBook().subscribe(
      data =>{this.Issuebook=data}
     )
      return this.Issuebook;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  returnbook(): Viewbooks[]{
    this.viewbook.getBooks().subscribe(
      data =>{this.book=data}
     )
      return this.book;

  }
  Find(callno:string){
    for(let item of this.book){
      if(item.callno==callno)
      {
        item.quantity+=1;
        item.issued-=1;
        this.updateQuan(item).subscribe();
        break;
      }
    }
  }
  updateStatus(b:issuebook): Observable<issuebook> {
    let id=b.id;
    return this.httpClient.put<issuebook>(this.baseUrl +"/"+id, JSON.stringify(b), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
    }
    updateQuan(b:Viewbooks): Observable<Viewbooks> {
     let id=b.id;
      return this.httpClient.put<Viewbooks>(this.baseUrl1 +"/"+id,JSON.stringify(b), this.httpOptions).pipe(
        retry(1),
        catchError(this.handleError)
      );
      }
      handleError(error: { error: { message: string; }; status: any; message: any; }) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
     }
   
   }



