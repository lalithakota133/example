import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibrarianService {
  private baseUrl="http://localhost:8080/api/librarians";
  constructor(private HttpClient:HttpClient) {}
  public Add(addlibrarian: any) {
    return this.HttpClient.post(this.baseUrl,addlibrarian,{responseType:"text" as "json"});
  }
 

 
}
