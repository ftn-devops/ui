import { Accommondation } from './accommondation';
import { Rate } from './rate';
import { Reservation } from './reservation';

export interface User {
  id: string;

  name: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  role: UserRole;
  avgRate: number;

  reservations: Reservation[];
  accommondations: Accommondation[];
  notifications : NotificationType[];

  rates: Rate[];
}

export enum UserRole {
  HOST=0,
  GUEST=1,
}

export enum NotificationType {
  ReservationRequest='ReservationRequest',
  ReservationCanceled='ReservationCanceled',
  GradeForMe='GradeForMe',
  GradeForAccommondation='GradeForAccommondation',  
  ReservationApproved='ReservationApproved',//User 
}
