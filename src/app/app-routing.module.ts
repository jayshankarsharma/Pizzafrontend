import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaincontentComponent } from './pages/maincontent/maincontent.component';
import { SignupComponent } from './signup/signup.component';
import {CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'maincontent', component:MaincontentComponent},
  {path:'', component:MaincontentComponent, pathMatch: 'full'},
  {path:'logout', component:LogoutComponent},
  {path:'cart', component:CartComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
