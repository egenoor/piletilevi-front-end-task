import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import ArrowDown from './arrow-down'
import Close from './close'
import Edit from './edit'
import { IconName } from './icon.types'
import pageArrowNext from './page-arrow-next'
import pageArrowPrev from './page-arrow-prev'
import Logo from './piletilevi-logo'
import Search from './search'
import Checkmark from './checkmark'

@Component({
  selector: 'app-piletilevi-svg',
  template: `
    <div class="inline-block" [innerHTML]="selectedIcon"></div>
  `,
})
export class PiletileviSvgComponent implements OnInit {
  iconMap: Record<IconName, SafeHtml>;
  selectedIcon: SafeHtml | null = null;
  @Input() name!: IconName;

  constructor(private sanitizer: DomSanitizer) {
    this.iconMap = {
      "piletilevi-logo": this.sanitizer.bypassSecurityTrustHtml(Logo),
      "arrow-down": this.sanitizer.bypassSecurityTrustHtml(ArrowDown),
      close: this.sanitizer.bypassSecurityTrustHtml(Close),
      edit: this.sanitizer.bypassSecurityTrustHtml(Edit),
      search: this.sanitizer.bypassSecurityTrustHtml(Search),
      "page-arrow-next": this.sanitizer.bypassSecurityTrustHtml(pageArrowNext),
      "page-arrow-prev": this.sanitizer.bypassSecurityTrustHtml(pageArrowPrev),
      checkmark: this.sanitizer.bypassSecurityTrustHtml(Checkmark)
    }
  }

  ngOnInit(): void {
    this.selectedIcon = this.iconMap[this.name]
  }
}
