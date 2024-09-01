import { Accommondation } from "./accommondation";

export interface Availability {
  accommondationId: string;
  accommondation : Accommondation;
  startDate: Date;
  endDate: Date;
  price: number;
  isPriceForPerson: boolean;
  autoConfirm: boolean;
}
