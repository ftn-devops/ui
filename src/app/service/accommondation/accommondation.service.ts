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

  url: string = `${environments.accommondation_service_url}/acc/`;


  constructor(private http: HttpClient) { }


  search(address:string, startDate:Date ,endDate :Date,guestNumber:number):Observable<Availability[]>{
    let searchObject = {
      address : address,
      startDate : startDate,
      endDate  : endDate,
      guestNumber : guestNumber
    };

    return this.http.post<Availability[]>(this.url+"searchAccommodations",searchObject);
  }

  getAccomondations(userId:string):Observable<Accommondation[]>{
    return this.http.get<Accommondation[]>(this.url+"allAccommodations");  
    
    // return this.http.get<Accommondation[]>("https://run.mocky.io/v3/55b4878e-a66a-4dc9-90b3-d7a46256590d");  
  }

  addNewAccomodation(accommodation:Accommondation):Observable<any>{
    return this.http.post<Accommondation[]>(this.url+"addAccommodation",accommodation);  
    // return this.http.post<any>(this.url+"f2fe0e1e-6077-41d7-9e78-0719bd207b00",accommodation);  
  }

  addNewAvailability(availability:Availability):Observable<any>{
    return this.http.post<any>(this.url+"addAvailability",availability);  
  }
}
