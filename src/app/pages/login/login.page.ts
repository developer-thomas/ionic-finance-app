import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type InputType = 'password' | 'text';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  myForm!: FormGroup;
  isVisible: InputType = 'password';

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      senha: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  changeInputPasswordType() {
    this.isVisible = this.isVisible === 'password' ? 'text' : 'password';
  }

  onSubmit() {
    this.router.navigateByUrl('/tabs/home');
    this.myForm.reset();
  }
}
