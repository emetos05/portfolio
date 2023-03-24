import { Component } from '@angular/core';
import { BioService } from '../../core/services/bio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private bioService: BioService) {}

  bio$ = this.bioService.getBio();

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallHeadings: false,
    },
    {
      viewClasses: 'd-flex d-md-none',
      headingClass: '',
      useSmallHeadings: true,
    },
  ];
}
