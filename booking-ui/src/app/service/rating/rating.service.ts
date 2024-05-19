import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate } from '../../model/rate';

@Injectable({
  providedIn: 'root'
})
export class RatingService {


  url: string = `${environments.user_service_url}`;


  constructor(private http: HttpClient) { }


  getRatings(userId:string):Observable<Rate[]>{
    return this.http.get<Rate[]>(this.url+"68dd9197-eb73-4d18-80a0-f13b522d756d");
  }
}
