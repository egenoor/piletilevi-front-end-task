import { Component } from '@angular/core'

@Component({
  selector: 'app-table-tabs',
  templateUrl: './table-tabs.component.html',
  styleUrl: './table-tabs.component.scss'
})
export class TableTabsComponent {
  activeFilter: string = "";
  tableTabs: {
    id: number,
    title: string,
    active: boolean
  }[] = [
    {
      id: 1,
      title: "Currently active",
      active: true
    },
    {
      id: 2,
      title: "Upcoming",
      active: false
    },
    {
      id: 3,
      title: "Archived",
      active: false
    }
  ]

  activeTextClass = "text-violet-200"
  activeTabClass = "bg-violet-200";
  inactiveTabClass = "bg-transparent border-t-0";

  setActiveFilter(tabName: string) {
    this.activeFilter = tabName;
  }
}
