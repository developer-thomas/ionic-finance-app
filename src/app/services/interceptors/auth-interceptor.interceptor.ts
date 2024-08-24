import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const loginToken = localStorage.getItem('payload');

    const loginReq = loginToken
      ? req.clone({ setHeaders: { Authorization: loginToken } })
      : req;
    return next.handle(loginReq);
  }
}
