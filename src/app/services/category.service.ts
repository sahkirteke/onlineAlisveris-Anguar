import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators'
@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/categories';


  getCategories():Observable<Category[]> {
    return this.http
    .get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse){
    let errorMesage= ''
    
    if(err.error instanceof ErrorEvent){
      errorMesage='bir  hata  var' +err.error.message;
      
    }else{
      errorMesage = 'sistemsel hata'
    }
    return throwError(errorMesage);
  }
}
