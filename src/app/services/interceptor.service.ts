import { Injectable } from '@angular/core';
import {HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse } from '@angular/common/http';
import { interceptingHandler } from '@angular/common/http/src/module';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor { 

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(
      tap(evt => {
          if (evt instanceof HttpResponse) {
            if(evt.body.msg){
              Swal.fire('',evt.body.msg[0].text , 'error')
            }
          }
      }));
  }
}
