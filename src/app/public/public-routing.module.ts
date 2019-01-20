import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectPageComponent} from './project-page/project-page.component';
import {EventsPageComponent} from './events-page/events-page.component';
import {ExecsComponent} from './execs/execs.component';
import {HomeComponent} from './home/home.component';
import {AboutPageComponent} from './about-page/about-page.component';


const adminRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'execs', pathMatch: 'full', component: ExecsComponent },
  { path: 'about', pathMatch: 'full', component: AboutPageComponent },
  { path: 'events', pathMatch: 'full', component: EventsPageComponent },
  { path: 'projects', pathMatch: 'full', component: ProjectPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }