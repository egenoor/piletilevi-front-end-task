import { Category } from '../enums/category.enum'

export interface Filters {
  freeText: string;
  categories: Category[];
}
