import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//3rd parties
import { NvD3Module } from 'ngx-nvd3';
import 'd3';
import 'nvd3';

import { AgmCoreModule } from '@agm/core';

import {AppRoutingModule} from './app.routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillAnalyticsComponent } from './dashboard/skill-analytics.component';
import { AnalyticsComponent } from './dashboard/analytics.component';
import { UserAgentComponent } from './dashboard/user-agent.component';
import { GMapComponent } from './shared/g-map.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MyExperienceComponent } from './dashboard/my-experience.component';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent, 

    //user component
    NavBarComponent, 
    DashboardComponent,
    SkillAnalyticsComponent,
    AnalyticsComponent,
    UserAgentComponent,
    GMapComponent,
    GalleryComponent,
    MyExperienceComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    
    AppRoutingModule,
    
    // //3rd
    NvD3Module,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAT2eJRIhjqFitkoPxhfTNkaQcvjYyGxQY",
      libraries: ["places"]
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
