import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators'
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';


  getProducts(categoryId: number):Observable<Product[]> {

    let newPath = this.path;
    if (categoryId)
    newPath += "?categoryId="+categoryId;

    return this.http
    .get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
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
