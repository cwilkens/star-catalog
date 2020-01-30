import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarListComponent } from './stars/star-list.component';
import { StarDetailComponent } from './stars/star-detail.component';
import { WelcomeComponent } from './home/welcome.component';


const routes: Routes = [
  { path: 'stars', component: StarListComponent },
  { path: 'stars/:id', component: StarDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
