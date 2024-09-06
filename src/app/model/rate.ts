export interface Rate {
  id: number;
  reviewerId: string;
  reviewerUsername: string;
  reviewedId: string;
  reviewedName: string;
  grade: number;
  date: Date;

  isForAccommodation:boolean;
}
