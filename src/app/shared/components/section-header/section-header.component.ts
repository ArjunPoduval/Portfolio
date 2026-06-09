import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <h2 class="section-title">
      {{ title }}<ng-content></ng-content>
    </h2>
  `
})
export class SectionHeaderComponent {
  @Input() title = '';
}
