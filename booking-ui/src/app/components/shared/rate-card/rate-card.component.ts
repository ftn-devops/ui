import { Component, Input } from '@angular/core';
import { Rate } from '../../../model/rate';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { MatButtonModule } from '@angular/material/button';

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
}
