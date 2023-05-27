import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Portfolio' },
  { path: 'about', component: AboutComponent, title: 'About Me' },
  { path: 'projects', component: ProjectsComponent, title: 'My Projects' },
  { path: 'contact', component: ContactComponent, title: 'Reach Out' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
