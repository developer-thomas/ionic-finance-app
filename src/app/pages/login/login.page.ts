import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
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
    private loginService: LoginService,
    private toastController: ToastController,
    private loadingController: LoadingController
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

  async onSubmit() {
    let credentials = {
      cpf: this.myForm.get('cpf')?.value,
      password: this.myForm.get('password')?.value,
    };

    await this.loginSpinner();

    this.loginService.userCredentials(credentials).subscribe({
      next: async (response) => {
        // usar o jwt no back e pegar o token aqui

        this.loadingController.dismiss();
      },
      error: async (error) => {
        await this.loadingController.dismiss();
        await this.loginErrorToast();
      },
      complete: () => {
        console.log('completed');
        this.router.navigateByUrl('/tabs/home');
        this.myForm.reset();
      },
    });
  }

  async loginErrorToast() {
    const toast = await this.toastController.create({
      message: 'CPF ou senha incorretos.',
      duration: 5000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }

  async loginSpinner() {
    const spinner = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Aguarde...',
    });

    spinner.present();
  }
}
