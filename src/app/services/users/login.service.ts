import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

interface userCredentials {
  cpf: string;
  passwsord: string;
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
    let errorMessage = '';

    if (responseError.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = responseError.error.message;
    } else {
      errorMessage = responseError.error.message;
    }

    return throwError(() => new Error(errorMessage));
  }
}
