import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isLanguageDropdownOpened: boolean = false;
  activeLanguage: string = "EN";
  selectableLanguages: string[] = ["ET"];
  allLanguages: string[] = ["EN", "ET"];

  menuItems: {
    id: number,
    title: string,
    route: string,
    active: boolean
  }[] = [
    {
      id: 1,
      title: "Back office",
      route: "/backoffice",
      active: true
    },
    {
      id: 2,
      title: "Back office",
      route: "/backoffice",
      active: false
    },
    {
      id: 3,
      title: "Reports",
      route: "/reports",
      active: false
    },
    {
      id: 4,
      title: "Help",
      route: "/help",
      active: false
    }
  ]
  activeTextClass = "text-violet-200"
  activeClass = "bg-violet-200";
  inactiveClass = "bg-transparent border-t-0";

  handleRouteChange (routeId: number) {
    this.menuItems.forEach((item) => {
      item.active = false
      if (item.id === routeId) {
        item.active = true
      }
    })
  }

  openLanguageDropdown() {
    this.isLanguageDropdownOpened = true;
    this.setSelectableLanguages();
  }

  closeLanguageDropdown() {
    this.isLanguageDropdownOpened = false;
  }

  changeLanguage(event: MouseEvent) {
    this.activeLanguage = (event.target as HTMLElement).innerHTML;
    this.setSelectableLanguages();
    this.closeLanguageDropdown();
  }

  setSelectableLanguages() {
    this.selectableLanguages = this.allLanguages.filter(language => this.activeLanguage !== language);
  }
}
