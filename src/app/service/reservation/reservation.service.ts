import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Reservation } from '../../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url: string = `${environments.user_service_url}`;


  constructor(private http: HttpClient) { }


  getReservations(userId:string):Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.url+"ec4e7f60-273b-40f0-ba0d-3977328ebb61");
  }
}
