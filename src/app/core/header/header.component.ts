import { Component, HostListener, OnInit } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private bioService: BioService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {}

  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  // Uncomment for fixed header
  // fixheader: boolean = false;

  // @HostListener('window:scroll', ['$event']) onScroll() {
  //   if (window.scrollY > 200) {
  //     this.fixheader = true;
  //   } else {
  //     this.fixheader = false;
  //   }
  // }

  menuItems = [
    {
      title: 'About Me',
      homePath: '/',
      fragment: 'about',
      pagePath: '/about',
    },
    {
      title: 'My Projects',
      homePath: '/',
      fragment: 'projects',
      pagePath: '/projects',
    },
    {
      title: 'Contact',
      homePath: '/',
      fragment: 'contact',
      pagePath: '/contact',
    },
  ];
}
