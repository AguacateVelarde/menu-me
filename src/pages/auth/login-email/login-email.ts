import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignUpPage } from '../sign-up/sign-up';
import { AuthProvider } from '../../../providers/auth';

import{ HomePage } from '../../home/home';

@Component({
  templateUrl: 'login-email.html',
  selector: 'login-email',
})

export class LoginEmailPage {
  error: any;
  form: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider,
    private loadingCtrl: LoadingController
  ) {
    this.form = {
      email: '',
      password: ''
    }
  }

  openForgotPasswordPage(): void {
    this.navCtrl.push(ForgotPasswordPage);
  }

  openSignUpPage(): void {
    this.navCtrl.push(SignUpPage);
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Iniciando sesión...'
    });
    loading.present();

    this.auth.loginWithEmail(this.form).subscribe(data => {
      setTimeout(() => {
        loading.dismiss();
        // The auth subscribe method inside the app.ts will handle the page switch to home
      }, 1000);
        this.navCtrl.push( HomePage );
    }, err => {
      setTimeout(() => {
        loading.dismiss();
        this.error = err;
      }, 1000);
    });
  }
}
