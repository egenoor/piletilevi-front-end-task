import { ChangeDetectionStrategy, Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private _sanitizer: DomSanitizer) {}

  getSvgUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
