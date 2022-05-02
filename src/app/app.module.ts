import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat-module/mat.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './includes/header/header/header.component';
import { FooterComponent } from './includes/footer/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { MaincontentComponent } from './pages/main-content/maincontent.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './services/authentication.service';
import { CartComponent } from './cart/cart.component';
import { CartServiceService } from './pages/main-content/cart-service.service';
import { ChekoutComponent } from './chekout/chekout.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MaincontentComponent,
    LogoutComponent,
    CartComponent,
    ChekoutComponent,
    OrdersComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    HttpClientModule,
    
    ReactiveFormsModule
  ],
  providers   : [CartServiceService,
    AuthGaurdService,
    
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
