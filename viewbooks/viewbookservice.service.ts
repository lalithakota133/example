import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Viewbooks } from './viewbooks';

@Injectable({
  providedIn: 'root'
})
export class ViewbookserviceService {
  private baseUrl="http://localhost:8080/api/books";
  constructor( private httpClient:HttpClient) { }
  getBooks():Observable<Viewbooks[]>{

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.books)
    );
  }

}
interface GetResponse{
  _embedded:{
    books:Viewbooks[];
  }
}
