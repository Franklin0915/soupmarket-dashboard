import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

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
}
