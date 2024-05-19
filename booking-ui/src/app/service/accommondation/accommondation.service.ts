import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accommondation } from '../../model/accommondation';
import { Availability } from '../../model/availability';

@Injectable({
  providedIn: 'root'
})
export class AccommondationService {

  url: string = `${environments.accommondation_service_url}`;


  constructor(private http: HttpClient) { }


  search(address:string, startDate:Date ,endDate :Date,guestNumber:number):Observable<Availability[]>{
    return this.http.get<Availability[]>(this.url+"0ff1b500-9bcf-4844-a847-708661dd767f");
  }

  getAccomondations(userId:string):Observable<Accommondation[]>{
    return this.http.get<Accommondation[]>(this.url+"f2fe0e1e-6077-41d7-9e78-0719bd207b00");  
  }

  addNewAccomodation(accommodation:Accommondation):Observable<any>{
    return this.http.post<any>(this.url+"f2fe0e1e-6077-41d7-9e78-0719bd207b00",accommodation);  
  }

  addNewAvailability(availability:Availability):Observable<any>{
    return this.http.post<any>(this.url+"f2fe0e1e-6077-41d7-9e78-0719bd207b00",availability);  
  }
}
