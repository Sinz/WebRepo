/*
 * @Since: 2020-09-27 21:20:53
 * @LastEditTime: 2020-09-27 21:57:43
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\global.interceptor.ts
 * @Description: 
 */
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      
    console.log('所有的请求都会经过这里。。。');
    const authToken = window.localStorage.getItem('auth_token');
    const authReq = req.clone({
        headers: req.headers.set('X-Access-Token', authToken)
      });
    return next.handle(authReq);
  } 
  
}