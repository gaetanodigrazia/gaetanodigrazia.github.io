import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ProjectsComponent } from './pages/projects/projects.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: BiographyComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
