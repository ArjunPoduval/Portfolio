import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Experience } from '../../../core/models/portfolio.models';
import { SkillBadgeComponent } from '../skill-badge/skill-badge.component';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [NgFor, NgIf, SkillBadgeComponent],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.scss'
})
export class TimelineItemComponent {
  @Input() item!: Experience;
}
