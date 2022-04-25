import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// const HeaderOptions={header: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn=new BehaviorSubject<boolean>(localStorage.getItem("userloggedin")==="true"?true:false);

  
  constructor(private http:HttpClient) { }
  login(username:string,password:string): Observable <any>{
    return this.http.post<any>('http://127.0.0.1:5000/api/users/login',{username,password},{'headers':{'Content-Type':'application/json'}});
    
  }
  signup(name:string,username:string, password:string,mobile:string,address:string){
    return this.http.post<any>('http://127.0.0.1:5000/api/users',{name,username,password,mobile,address},{'headers':{'Content-Type':'application/json'}});
   
  }
}
