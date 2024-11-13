import { Category } from '../enums/category'

export interface Filters {
  freeText: string;
  category: Category | "";
}