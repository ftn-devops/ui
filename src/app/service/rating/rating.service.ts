import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate } from '../../model/rate';

@Injectable({
  providedIn: 'root'
})
export class RatingService {


  userServiceUrl: string = `${environments.user_service_url}`;

  accommodationServiceUrl : string = `${environments.accommondation_service_url}grades/`;

  constructor(private http: HttpClient) { }


  getRatings(userId:string, isForAccommodations:boolean):Observable<Rate[]>{
    if(isForAccommodations){
      return this.http.get<Rate[]>(this.accommodationServiceUrl+"allAccommodationGrades");
    }
    return this.http.get<Rate[]>(this.userServiceUrl+"allUserGrades");
  }

  addRate(rate:Rate):Observable<boolean>{
    if(rate.isForAccommodation){
      return this.http.post<boolean>(this.accommodationServiceUrl+"addAccommodationGrade",rate);

    }
    //TODO: change to user service 
    return this.http.post<boolean>(this.userServiceUrl+"addUserGrade",rate);
  }

  deleteRate(rate:Rate){
    
    if(rate.isForAccommodation){
      return this.http.post<boolean>(this.accommodationServiceUrl+"deleteAccommodationGrade",rate);
    }else{
      return this.http.post<boolean>(this.userServiceUrl+"deleteUserGrade",rate);
    }
    
  }
}
