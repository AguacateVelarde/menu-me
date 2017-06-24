import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginEmailPage } from '../auth/login-email/login-email';
import { SignUpPage } from '../auth/sign-up/sign-up';
import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { AuthProvider } from '../../providers/auth';


import { HomePage } from '../home/home';

@Component({
  selector: 'page-jump',
  templateUrl: 'jump.html'
})
export class JumpPage {
    error: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad JumpPage');
  }

  openHomePage(){
      this.navCtrl.push( HomePage );
  }

  openSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

  openLoginPage() {
    this.navCtrl.push(LoginEmailPage);
  }

  openTermsOfService() {
    this.navCtrl.push(TermsOfServicePage);
  }

  loginUserWithFacebook() {
    this.auth.loginWithFacebook().subscribe(data => {
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.error = err;
    });
  }

}
