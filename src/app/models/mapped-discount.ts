import { Category } from '../enums/category'

export interface MappedDiscount {
  name: string;
  category: Category;
  timePeriod: string;
  amount: string;
}