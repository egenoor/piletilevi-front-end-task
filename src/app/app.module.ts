import { registerLocaleData } from '@angular/common'
import { provideHttpClient } from '@angular/common/http'
import localeEt from '@angular/common/locales/et'
import { LOCALE_ID, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CheckboxComponent } from './common/components/checkbox/checkbox.component'
import { IconComponent } from './common/components/icon/icon.component'
import { ModalComponent } from './common/components/modal/modal.component'
import { PaginationComponent } from "./common/components/pagination/pagination.component"
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component"
import { DiscountFiltersComponent } from './components/discount-filters/discount-filters.component'
import { DiscountTableComponent } from './components/discount-table/discount-table.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NewDiscountModalComponent } from "./components/new-discount-modal/new-discount-modal.component"
import { TableTabsComponent } from './components/table-tabs/table-tabs.component'
import { DiscountViewComponent } from './views/discount-view/discount-view.component'

registerLocaleData(localeEt)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    DiscountTableComponent,
    DiscountViewComponent,
    NewDiscountModalComponent,
    ModalComponent,
    PaginationComponent,
    DiscountFiltersComponent,
    CheckboxComponent,
    TableTabsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
],
  providers: [provideHttpClient(), {provide: LOCALE_ID, useValue: "et-EE"}],
  bootstrap: [AppComponent]
})
export class AppModule {}