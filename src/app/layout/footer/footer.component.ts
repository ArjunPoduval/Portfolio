import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number;

  constructor(data: PortfolioDataService) {
    this.currentYear = data.currentYear;
  }
}
