import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'timeline',
    component:TimelineComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
