import { Category } from '../common/enums/category.enum'

export interface Discount {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  discountAmount: number;
  category: Category;
}