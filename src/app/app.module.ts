import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { SingleComponent } from './pages/single/single.component';
import { ItemComponent } from './layout/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicItemComponent } from './pages/topics/topic-item/topic-item.component';
import { SimilarComponent } from './pages/single/similar/similar.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewComponent,
    TopicsComponent,
    SingleComponent,
    ItemComponent,
    TopicItemComponent,
    SimilarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
