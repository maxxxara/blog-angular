import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { SingleComponent } from './pages/single/single.component';
import { TopicsComponent } from './pages/topics/topics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'type/:type', component: NewComponent },
  { path: 'single', component: SingleComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
