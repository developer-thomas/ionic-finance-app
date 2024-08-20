import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type InputType = 'password' | 'text';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  myForm!: FormGroup;
  isVisible: InputType = 'password';

  constructor(private fb: FormBuilder) {
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
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
