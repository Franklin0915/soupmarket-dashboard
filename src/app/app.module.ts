import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SmoothAreaChartComponent } from './smooth-area-chart/smooth-area-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    MainNavComponent,
    SmoothAreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    FormsModule,
    MatSlideToggleModule,
    NgxChartsModule,
    MatProgressBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
