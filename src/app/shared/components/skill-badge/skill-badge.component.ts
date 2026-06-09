import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  template: `<span class="tag" [class.tag-featured]="featured">{{ label }}</span>`,
  styles: [`
    .tag {
      font-size: 0.75rem;
      font-weight: 500;
      padding: 3px 10px;
      border-radius: 20px;
      background: rgba(56, 189, 248, 0.08);
      color: #94A3B8;
      border: 1px solid rgba(56, 189, 248, 0.15);
      letter-spacing: 0.02em;
      transition: background-color 0.3s ease, color 0.3s ease;
      display: inline-block;

      &:hover {
        background-color: rgba(56, 189, 248, 0.16);
        color: #38BDF8;
      }
    }

    .tag-featured {
      background: rgba(56, 189, 248, 0.12);
      color: #38BDF8;
      border-color: rgba(56, 189, 248, 0.3);
      font-weight: 600;
    }
  `]
})
export class SkillBadgeComponent {
  @Input() label = '';
  @Input() featured = false;
}
