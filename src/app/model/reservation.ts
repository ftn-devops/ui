    import { Accommondation } from "./accommondation";
    import { User } from "./user";

    export interface Reservation {
    userId: string;
    user:User;
    accommodationId: string;
    accommodation:Accommondation;
    startDate: Date;
    endDate: Date;
    price: number;
    numberOfPersons: number;
    reservationStatus: ReservationStatus;
    }

    export enum ReservationStatus {
    PENDING='PENDING',
    CONFIRMED='CONFIRMED',
    DECLINED='DECLINED',
    CANCELED='CANCELED',
    FINISHED='FINISHED',
    }
