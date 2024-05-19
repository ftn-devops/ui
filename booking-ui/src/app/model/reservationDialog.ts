import { Availability } from './availability';

export interface ReservationDialogData {
  availability: Availability;
  startDate: Date;
  endDate: Date;
  guestNumber: number;
}
