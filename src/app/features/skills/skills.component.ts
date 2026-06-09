import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SkillGroup } from '../../core/models/portfolio.models';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBadgeComponent, FadeInDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups: SkillGroup[];

  constructor(data: PortfolioDataService) {
    this.skillGroups = data.skillGroups;
  }
}
