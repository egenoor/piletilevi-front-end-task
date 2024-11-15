import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import ArrowDown from '../../../icons/piletilevi-svg/arrow-down'
import Checkmark from '../../../icons/piletilevi-svg/checkmark'
import Close from '../../../icons/piletilevi-svg/close'
import Edit from '../../../icons/piletilevi-svg/edit'
import { IconName } from '../../../icons/piletilevi-svg/icon.types'
import pageArrowNext from '../../../icons/piletilevi-svg/page-arrow-next'
import pageArrowPrev from '../../../icons/piletilevi-svg/page-arrow-prev'
import Logo from '../../../icons/piletilevi-svg/piletilevi-logo'
import Search from '../../../icons/piletilevi-svg/search'

@Component({
  selector: 'app-icon',
  template: `
    <div class="inline-block flex justify-center" [innerHTML]="selectedIcon"></div>
  `,
})
export class IconComponent implements OnInit {
  iconMap: Record<IconName, SafeHtml>;
  selectedIcon: SafeHtml | null = null;
  @Input({required: true}) name!: IconName;

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
