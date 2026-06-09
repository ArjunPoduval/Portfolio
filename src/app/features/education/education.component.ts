import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Education, Certification } from '../../core/models/portfolio.models';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education;
  certifications: Certification[];

  constructor(data: PortfolioDataService) {
    this.education = data.education;
    this.certifications = data.certifications;
  }
}
