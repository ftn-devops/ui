import { Component, OnInit, inject } from '@angular/core';
import { RatingService } from '../../../service/rating/rating.service';
import { Rate } from '../../../model/rate';
import { UserService } from '../../../service/user/user.service';
import { RateCardComponent } from '../../shared/rate-card/rate-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [RateCardComponent,
    MatSlideToggleModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent implements OnInit {

  private ratingsService = inject(RatingService);
  private userService = inject(UserService);

  isForAccommodations:boolean = true;

  ratings : Rate[] = [];

  constructor(){
  }
  ngOnInit(): void {
    this.updateRatings();
  }
  
  updateRatings(){
    this.ratings = [];
    this.ratingsService.getRatings("userid",this.isForAccommodations).subscribe(data=>{
      
      console.log(data);
      this.ratings = data;
      this.ratings.forEach(x => x.isForAccommodation=this.isForAccommodations);
      console.log(this.ratings);
    })
  }
}
