import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  userCredentials(cpf: string, password: string): Observable<any> {
    return this.http.post<{ cpf: string; password: string }>(
      `${environment.base_url}/login`,
      {
        cpf,
        password,
      }
    );
  }
}
