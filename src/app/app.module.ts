import { provideHttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component"
import { DiscountFiltersComponent } from './components/discount-filters/discount-filters.component'
import { DiscountTableComponent } from './components/discount-table/discount-table.component'
import { ModalComponent } from './components/modal/modal.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NewDiscountModalComponent } from "./components/new-discount-modal/new-discount-modal.component"
import { PaginationComponent } from "./components/pagination/pagination.component"
import { PiletileviSvgComponent } from './icons/piletilevi-svg/piletilevi-svg.component'
import { DiscountViewComponent } from './views/discount-view/discount-view.component';
import { CheckboxComponent } from './common/checkbox/checkbox.component';
import { TableTabsComponent } from './components/table-tabs/table-tabs.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    PiletileviSvgComponent,
    DiscountTableComponent,
    DiscountViewComponent,
    NewDiscountModalComponent,
    ModalComponent,
    PaginationComponent,
    DiscountFiltersComponent,
    CheckboxComponent,
    TableTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {}