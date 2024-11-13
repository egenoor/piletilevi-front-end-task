import { provideHttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component"
import { DiscountTableComponent } from './components/discount-table/discount-table.component'
import { ModalComponent } from './components/modal/modal.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NewDiscountModalComponent } from "./components/new-discount-modal/new-discount-modal.component"
import { PaginationComponent } from "./components/pagination/pagination.component"
import { PiletileviSvgComponent } from './icons/piletilevi-svg/piletilevi-svg.component'
import { DiscountViewComponent } from './views/discount-view/discount-view.component'

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
  ],
  imports: [
    BrowserModule,
],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {}