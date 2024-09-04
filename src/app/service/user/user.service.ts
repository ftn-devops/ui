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
    return this.http.get<User>(this.url+"58790e5a-c3ee-4a03-b1b4-8438ee368928");
  }

  setLoggedUser(user:User|undefined){
    this.loggedUser.next(user);
  }
}
