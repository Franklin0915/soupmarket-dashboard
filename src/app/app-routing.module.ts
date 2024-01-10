import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"sidenav",component:SidenavComponent},
  {path:"mainNav",component:MainNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
