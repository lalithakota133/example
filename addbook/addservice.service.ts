import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {
  private baseUrl="http://localhost:8080/api/books";
  constructor(private httpClient:HttpClient) { }
  public Add(Addbook: any){
    return this.httpClient.post(this.baseUrl,Addbook,{responseType:"text" as"json"});
  }
  }



  


