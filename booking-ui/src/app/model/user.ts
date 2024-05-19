import { Accommondation } from './accommondation';
import { Rate } from './rate';
import { Reservation } from './reservation';

export interface User {
    id:string;
  name: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  role: UserRole;
  avgRate: number;

  reservations: Reservation[];
  accommondations: Accommondation[];

  rates : Rate[];
}

export enum UserRole {
  GUEST,
  HOST,
}
