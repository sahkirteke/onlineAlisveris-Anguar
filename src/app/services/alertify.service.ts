import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }

  eror(message:string){
    alertify.eror(message)
  }
  warning(message:string){
    alertify.warning(message)
  }
}

