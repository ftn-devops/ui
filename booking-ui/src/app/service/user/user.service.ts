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
  
  url: string = `${environments.user_service_url}`;


  constructor(private http: HttpClient) { }


  login(emai:string,password:string):Observable<User>{
    return this.http.get<User>(this.url+"4590a7ea-af19-471d-b973-0335b6a71596");
  }

  setLoggedUser(user:User|undefined){
    this.loggedUser.next(user);
  }
}
