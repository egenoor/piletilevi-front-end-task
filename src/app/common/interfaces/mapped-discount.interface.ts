import { Category } from '../enums/category.enum'

export interface MappedDiscount {
  name: string;
  category: Category;
  timePeriod: string;
  startDate: Date;
  endDate: Date;
  amount: string;
}