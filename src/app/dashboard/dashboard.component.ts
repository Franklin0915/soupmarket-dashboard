import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  currentValue: number = 0;
  previousValue: number = 0;

  constructor(private route: Router, public service: AssetsService) { }

  ngOnInit() {
    this.data = this.service.data;
  }

  getPointerClass(value: string): string {
    const numericValue = parseFloat(value.replace('%', '').trim());
    return numericValue < 0 ? 'red-pointer' : 'green-pointer';
  }

  hasTermKey(item: any): boolean {
    return 'term' in item;
  }

  

}
