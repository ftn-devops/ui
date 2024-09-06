import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Reservation } from '../../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url: string = `${environments.reservation_service_url}`;


  constructor(private http: HttpClient) { }

  sendReservation(reservation:Reservation):Observable<boolean>{
    return this.http.post<boolean>(this.url+"/addReservation",reservation);
  }
  
  confirmReservation(reservation:Reservation):Observable<boolean>{
    return this.http.post<boolean>(this.url+"/confirmReservation",reservation);
  }

  cancelReservation(reservation:Reservation):Observable<boolean>{
    return this.http.post<boolean>(this.url+"/cancelReservation",reservation);
  }

  getReservations(userId:string):Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.url+"/allReservations");
  }

}
