import { Availability } from './availability';
import { Rate } from './rate';
import { User } from './user';

export interface Accommondation {
  id: string;
  hostId: string;
  name: string;
  address: string;
  description: string;
  minGuestNumber: number;
  maxGuestNumber: number;
  images: string[];
  avgRate: number;
  host:User|undefined;
  availabilities: Availability[];

  rates: Rate[];
}
