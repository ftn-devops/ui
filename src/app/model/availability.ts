import { Accommondation } from "./accommondation";

export interface Availability {
  accommodationId: string;
  accommodation : Accommondation;
  startDate: Date;
  endDate: Date;
  price: number;
  isPriceForPerson: boolean;
  autoConfirm: boolean;
}
