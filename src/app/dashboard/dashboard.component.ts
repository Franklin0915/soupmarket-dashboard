import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { Chart } from 'chart.js';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChartConfiguration, ChartType, ChartDataset } from 'chart.js';
import { SmoothAreaChartComponent } from '../smooth-area-chart/smooth-area-chart.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(private route:Router){}
  
   

}
