import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Experience } from '../../core/models/portfolio.models';
import { TimelineItemComponent } from '../../shared/components/timeline-item/timeline-item.component';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, TimelineItemComponent, FadeInDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[];

  constructor(data: PortfolioDataService) {
    this.experiences = data.experiences;
  }
}
