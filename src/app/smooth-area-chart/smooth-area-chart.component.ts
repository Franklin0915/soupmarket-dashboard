import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-smooth-area-chart',
  template: '<canvas id="smoothAreaChart" width="400" height="100"></canvas>',
  styleUrls: ['./smooth-area-chart.component.css'],
})
export class SmoothAreaChartComponent implements OnInit {
  private smoothAreaChart: Chart;

  constructor() {
    this.smoothAreaChart = {} as Chart;
  }

  ngOnInit(): void {
    this.createSmoothAreaChart();
  }

  private createSmoothAreaChart(): void {
    const canvas = document.getElementById('smoothAreaChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.smoothAreaChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Smooth Area Chart',
              data: [10, 20, 15, 25, 18, 30, 22],
              borderColor: '#EEC5A6',
              backgroundColor: '#EEC5A6',
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'category',
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } else {
      console.error('Could not get 2D context for the canvas.');
    }
  }
}
