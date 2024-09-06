import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Rate } from '../../../model/rate';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { RatingService } from '../../../service/rating/rating.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rate-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    StarRatingComponent,
    MatButtonModule
  ],
  templateUrl: './rate-card.component.html',
  styleUrl: './rate-card.component.scss'
})
export class RateCardComponent {
  @Input() rate!:Rate;
  @Input() isForAccommodation:boolean = true;
  @Output() deletedGrade: EventEmitter<any> = new EventEmitter();

  private ratingService = inject(RatingService);
  private toastrService = inject(ToastrService);

  constructor(){
  }

  deleteRate(){
    this.ratingService.deleteRate(this.rate).subscribe(data=>{
      if(data){
        this.toastrService.success("Uspešno ste izbrisali ocenu");
        this.deletedGrade.emit();
      }
      else{
        this.toastrService.warning("Došlo je do greške prilikom brisanja ocene, pokušajte ponovo.");
      }
    })
  }
}
