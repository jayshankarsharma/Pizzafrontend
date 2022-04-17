import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaincontentComponent } from './pages/maincontent/maincontent.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'maincontent', component:MaincontentComponent},
  {path:'logout', component:LogoutComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
