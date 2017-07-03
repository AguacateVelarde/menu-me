import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { ForgotPasswordPage } from '../pages/auth/forgot-password/forgot-password';
import { AuthPage } from '../pages/auth/home/home';
import { LoginEmailPage } from '../pages/auth/login-email/login-email';
import { SignUpPage } from '../pages/auth/sign-up/sign-up';
import { HomePage } from '../pages/home/home';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { JumpPage } from '../pages/jump/jump';
import { CarritoPage } from '../pages/carrito/carrito';
import { CardPage } from '../pages/card/card';

import { AngularFireModule } from 'angularfire2';

// Providers
import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';
import { Pedido } from '../providers/pedido';


export const firebaseConfig = {
  apiKey: "AIzaSyC9t39KkbZK-bQKqY0vNL75-UoaZL4s6lo",
    authDomain: "ingenieria-de-software-58b22.firebaseapp.com",
    databaseURL: "https://ingenieria-de-software-58b22.firebaseio.com",
    projectId: "ingenieria-de-software-58b22",
    storageBucket: "ingenieria-de-software-58b22.appspot.com",
    messagingSenderId: "315897376876"
};

@NgModule({
  declarations: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    TermsOfServicePage,
    JumpPage,
    CarritoPage,
    CardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    TermsOfServicePage,
    JumpPage,
    CarritoPage,
    CardPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider, AuthProvider, Pedido]
})
export class AppModule {}
