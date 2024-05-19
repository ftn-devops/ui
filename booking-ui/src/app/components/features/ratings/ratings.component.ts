import { Component, inject } from '@angular/core';
import { RatingService } from '../../../service/rating/rating.service';
import { Rate } from '../../../model/rate';
import { UserService } from '../../../service/user/user.service';
import { RateCardComponent } from '../../shared/rate-card/rate-card.component';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [RateCardComponent],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {

  private ratingsService = inject(RatingService);
  private userService = inject(UserService);

  ratings : Rate[] = [];

  constructor(){

    this.ratingsService.getRatings("userid").subscribe(data=>{
      this.ratings = data;
    })
  }
}
