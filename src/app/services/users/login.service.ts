import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

interface userCredentials {
  cpf: string;
  passwsord: string;
}

interface HttpStatusInterface {
  message: string;
  status: number;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  userCredentials(credentials: {
    cpf: string;
    password: string;
  }): Observable<any> {
    return this.http
      .post<userCredentials>(`${environment.base_url}/login`, credentials)
      .pipe(catchError(this.handleError));
  }

  private handleError(responseError: HttpErrorResponse) {
    let errorMessage: HttpStatusInterface;

    if (responseError.error instanceof ErrorEvent) {
      // Erro do lado servidor
      errorMessage = {
        message: responseError.message,
        status: responseError.status,
      };
    } else {
      // Erro do lado do cliente
      errorMessage = {
        message: responseError.message,
        status: responseError.status,
      };
    }

    return throwError(() => errorMessage);
  }
}
