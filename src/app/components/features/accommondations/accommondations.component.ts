import { Component, Injector } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { AccommondationService } from '../../../service/accommondation/accommondation.service';
import { Accommondation } from '../../../model/accommondation';
import { AccommondationCardComponent } from '../../shared/accommondation-card/accommondation-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { NewAccommodationComponent } from '../new-accommodation/new-accommodation.component';
import { NewAvailabilityComponent } from '../new-availability/new-availability.component';

@Component({
  selector: 'app-accommondations',
  standalone: true,
  imports: [AccommondationCardComponent, MatIconModule, MatButtonModule],
  templateUrl: './accommondations.component.html',
  styleUrl: './accommondations.component.scss',
})
export class AccommondationsComponent {
  accommondations: Accommondation[] = [];
  userId:string = "";
  constructor(
    private userService: UserService,
    private accommondationService: AccommondationService,
    public dialog: MatDialog,
    private injector: Injector
  ) {
    accommondationService.getAccomondations('test').subscribe((data) => {
      this.accommondations = data;
    });
    this.userService.loggedUser$.subscribe((data) => {
      if (data != null){
        this.userId = data.id;
        this.updateAccommodations();
      }
    });
  }

  updateAccommodations(){
    this.accommondationService.getAccomondations(this.userId).subscribe((data) => {
      this.accommondations = data;
    });
  }

  addNewAccommondation(){
    const dialogRef = this.dialog.open(NewAccommodationComponent, {
      data: {
      },
    }).afterClosed().subscribe(()=>{
      this.updateAccommodations();
    });
  }

  addNewAvailability(accommondation:Accommondation){
    const dialogRef = this.dialog.open(NewAvailabilityComponent, {
      data: accommondation,
      injector:this.injector
    });
  }
}
