import { Category } from '../enums/category'

export interface MappedDiscount {
  name: string;
  category: Category;
  timePeriod: string;
  startDate: Date;
  endDate: Date;
  amount: string;
}