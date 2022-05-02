import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaincontentComponent } from './pages/main-content/maincontent.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { 
  AuthGaurdService as AuthGuard 
} from './services/auth-gaurd.service';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'maincontent', component: MaincontentComponent },
  { path: '', component: MaincontentComponent, pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: ChekoutComponent,canActivate :[AuthGuard]},
  { path: 'payment', component: PaymentComponent,canActivate :[AuthGuard]},
  { path: 'orders', component: OrdersComponent,canActivate :[AuthGuard]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
