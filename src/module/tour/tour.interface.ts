import { Model } from "mongoose";

export interface ITour {
    name: string;
    durationHours: string;
    averageRating: number; 
    price: number;
    coverImage: string;
    images: string[]; 
    startDate: Date;
    startLocation?: string;
    location: string[]; 
    slug: string; 
  }

  export  interface ITourMethods{
    getNextNearestStartDateAndEndData():{
      nerrestStartDate:Date |null,
      estimatedEndDate: Date | null,
    }
  }

  type TTourModel = Model<ITour, Record<string ,unknown>, ITourMethods>

  export default TTourModel;