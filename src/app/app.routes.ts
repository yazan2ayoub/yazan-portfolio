import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { CvComponent } from './components/cv/cv';
import { PortfolioComponent } from './components/portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: '' }
];