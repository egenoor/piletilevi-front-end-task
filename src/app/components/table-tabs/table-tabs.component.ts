import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { DiscountTab } from '../../common/types/discount-tab.type'

@Component({
  selector: 'app-table-tabs',
  templateUrl: './table-tabs.component.html'
})
export class TableTabsComponent implements OnChanges {
  discounts: Record<DiscountTab, number> = {
    currentlyActive: 0,
    upcoming: 0,
    archived: 0
  }

  @Input({required: true}) activeDiscounts!: number;
  @Input({required: true}) upcomingDiscounts!: number;
  @Input({required: true}) archivedDiscounts!: number;
  @Input({required: true}) onTabChange!: (tabName: DiscountTab) => void;

  tableTabs: {
    id: number,
    value: DiscountTab,
    title: string,
    active: boolean,
  }[] = [
    {
      id: 1,
      value: "currentlyActive",
      title: "Currently active",
      active: true,
    },
    {
      id: 2,
      value: "upcoming",
      title: "Upcoming",
      active: false,
    },
    {
      id: 3,
      value: "archived",
      title: "Archived",
      active: false,
    }
  ]

  activeTextClass = "text-violet-200"
  activeTabClass = "bg-violet-200";
  inactiveTabClass = "bg-transparent border-t-0";

  setActiveFilter(tabName: DiscountTab) {
    this.tableTabs.forEach((item) => {
      item.active = false
      if (item.value === tabName) {
        item.active = true
      }
    })
    this.onTabChange(tabName);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeDiscounts'] && changes['upcomingDiscounts'] && changes['archivedDiscounts']) {
      this.discounts.currentlyActive = changes['activeDiscounts'].currentValue;
      this.discounts.upcoming= changes['upcomingDiscounts'].currentValue;
      this.discounts.archived = changes['archivedDiscounts'].currentValue;
    }
  }
}
