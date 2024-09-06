import { Component, Inject, Input, inject } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Rate } from '../../../model/rate';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RatingService } from '../../../service/rating/rating.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-give-rate',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './give-rate.component.html',
  styleUrl: './give-rate.component.scss',
})
export class GiveRateComponent {

  private ratingsService = inject(RatingService);
  private toastrService = inject(ToastrService);

  constructor(
    public dialogRef: MatDialogRef<GiveRateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Rate,
  ){

  }

  sendGrade(grade:number) {
    this.data.grade = grade;
    this.ratingsService.addRate(this.data).subscribe(
      data => {
        if(data){
          this.toastrService.success(`Uspešno ste prosledili ocenu ${grade}` )
          this.dialogRef.close();
        }
        else{
          this.toastrService.warning("Došlo je do greške prilikom prosleđivanja ocene, pokušajte ponovo")
        }
      }
    );

  }
}
