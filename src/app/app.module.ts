import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {NgForm} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appMatMadule/mat.module';
import { HeaderComponent } from './includes/header/header/header.component';
import { FooterComponent } from './includes/footer/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { MaincontentComponent } from './pages/maincontent/maincontent.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

export let changeLogIcon:string;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MaincontentComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
