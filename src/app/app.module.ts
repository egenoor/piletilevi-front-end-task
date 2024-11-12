import { provideHttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component"
import { NavbarComponent } from './components/navbar/navbar.component';
import { PiletileviSvgComponent } from './icons/piletilevi-svg/piletilevi-svg.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    PiletileviSvgComponent
  ],
  imports: [
    BrowserModule,
],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {}