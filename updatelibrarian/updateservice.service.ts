import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { addlibrarian } from '../librarian/addlibrarian';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {
  private baseUrl="http://localhost:8080/api/librarians";
 
  lib!:addlibrarian;
  id!:string;
  constructor(private httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  setval(b:addlibrarian){
    this.lib=b;
    this.id=b.l_ID;
  }
  getmail(){
    return this.lib;
  }
  
  updateStatus(b:addlibrarian): Observable<addlibrarian> {
     console.log(b);
    return this.httpClient.put<addlibrarian>(this.baseUrl +"/"+b.l_ID, JSON.stringify(b), this.httpOptions).pipe(
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
