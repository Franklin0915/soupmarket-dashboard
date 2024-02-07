import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SmoothAreaChartComponent } from './smooth-area-chart/smooth-area-chart.component';
import { PointerComponent } from './pointer/pointer.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"sidenav",component:SidenavComponent},
  {path:"mainNav",component:MainNavComponent},
  {path:"areaChart",component:SmoothAreaChartComponent},
  {path:"pointer",component:PointerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
