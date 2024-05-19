import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Accommondation } from '../../../model/accommondation';
import { MatIconModule } from '@angular/material/icon';
import { Availability } from '../../../model/availability';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-accommondation-card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './accommondation-card.component.html',
  styleUrl: './accommondation-card.component.scss',
})
export class AccommondationCardComponent {
  @Input() availability!: Availability;
  @Input() accommondation!: Accommondation;
  @Input() isForAvailability: boolean = false;
  @Input() showActions: boolean = false;

  @Output() reserveOffer = new EventEmitter<Availability>();
  @Output() addNewAvailability = new EventEmitter<Accommondation>();

  reserve() {
    this.reserveOffer.emit(this.availability);
  }

  newAvailability(){
    this.addNewAvailability.emit(this.accommondation);
  }
}
