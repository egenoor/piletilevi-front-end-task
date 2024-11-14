import { Category } from '../enums/category'

export interface Discount {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  discountAmount: number;
  category: Category;
}