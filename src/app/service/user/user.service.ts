import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedUser = new BehaviorSubject<User|undefined>(undefined);
  loggedUser$ = this.loggedUser.asObservable();
  
  url: string = `${environments.user_service_url}/users`;


  constructor(private http: HttpClient) { }


  login(emai:string,password:string):Observable<User>{
    return this.http.get<User>(this.url+"/login?username="+emai+"&password="+password);
  }

  register(user:User):Observable<User>{
    return this.http.post<User>(this.url+"/register",user);
  }

  setLoggedUser(user:User|undefined){
    this.loggedUser.next(user);
  }
}
