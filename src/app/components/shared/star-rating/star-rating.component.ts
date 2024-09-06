import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

  @Input('rating') rating: number = 0;
  @Input('starCount') starCount: number = 5;
  @Input('color')  color: string = 'accent';
  @Output()  ratingUpdated = new EventEmitter();

  ratingArr:number[] = [];

  constructor(private toasterService:ToastrService) {
  }


  ngOnInit() {
    console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    console.log(rating)
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
