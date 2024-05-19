import { Availability } from './availability';
import { Rate } from './rate';

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

  availabilities: Availability[];

  rates: Rate[];
}
