import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/users/login.service';

type InputType = 'password' | 'text';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  myForm!: FormGroup;
  isVisible: InputType = 'password';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.myForm = this.fb.group({
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  changeInputPasswordType() {
    this.isVisible = this.isVisible === 'password' ? 'text' : 'password';
  }

  onSubmit() {
    // this.router.navigateByUrl('/tabs/home');
    this.loginService
      .userCredentials(
        this.myForm.get('cpf')?.value,
        this.myForm.get('password')?.value
      )
      .subscribe((res) => {
        console.log(res);
      });
    this.myForm.reset();
  }
}
