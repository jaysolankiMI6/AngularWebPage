import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    DetailsComponent,
    ContactComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
