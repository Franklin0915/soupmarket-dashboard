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
    Sidenav(){
      this.route.navigate(['/sidenav'])
    }
    toNav(){
      this.route.navigate(["/mainNav"])
    }
    // ngOnInit(): void {
    //   this.createSmoothAreaChart();
    // }
   toAreaChart(){
    this.route.navigate(["/areaChart"])
   }
    progressValue: number = 50;

    smallerView: [number, number] = [700, 200];
  colorScheme: any = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };

  // Update to use lineChartData for the line graph
  lineChartData: any[] = [
    {
      name: 'Series A',
      series: [
        { name: 'Jan', value: 730 },
        { name: 'Feb', value: 1200 },
        { name: 'Mar', value: 1000 },
        // Add more data points as needed
      ],
    },
    {
      name: 'Series B',
      series: [
        { name: 'Jan', value: 500 },
        { name: 'Feb', value: 900 },
        { name: 'Mar', value: 800 },
        // Add more data points as needed
      ],
    },
    // Add more series as needed
  ];

  gradient: boolean = false;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'X-Axis Label';
  yAxisLabel: string = 'Y-Axis Label';
  
//  inputs = {
//     min: -100,
//     max: 100,
//     count: 8,
//     decimals: 2,
//     continuity: 1
//   };
  
//    generateLabels = (): string[] => {
//     // Assuming Utils is an object with a months function
//     return Utils.months({ count: this.inputs.count });
//   };
  
//    generateData = (): number[] => {
//     // Assuming Utils is an object with a numbers function
//     return Utils.numbers(inputs);
//   };
  
//   data: ChartDataset[] = [
//     {
//       label: 'Dataset',
//       data: this.generateData(),
//       borderColor:Chart.,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
//       fill: false
//     }
//   ];
  
//   config: ChartConfiguration<ChartType> = {
//     type: 'line',
//     data: {
//       labels: this.generateLabels(),
//       datasets: this.data,
//     },
//     options: {
//       plugins: {
//         filler: {
//           propagate: false,
//         },
//         title: {
//           display: true,
//           text: (ctx) => 'Fill: ' + (ctx.chart.data?.datasets[0].fill || ''),
//         },
//       },
//       interaction: {
//         intersect: false,
//       },
//     },
//   };
  


}
