import { Category } from '../enums/category'

export interface Filters {
  freeText: string;
  categories: Category[];
}

export type DiscountTab = "currentlyActive" | "upcoming" | "archived";