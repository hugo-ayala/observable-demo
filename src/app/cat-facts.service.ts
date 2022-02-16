import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, take, throwError } from 'rxjs';
import { CatFacts } from './cat-facts';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {
  url:string='https://cat-fact.herokuapp.com/facts';
  constructor(public _http: HttpClient) { }

  getAllFacts(){
    return this._http.get<CatFacts[]>(this.url).pipe(retry(2)); //replace take with retry
  }

}
