import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllcountriesComponent } from './components/allcountries/allcountries.component';
import { AllregionsComponent } from './components/allregions/allregions.component';


const routes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash', component: DashboardComponent },
  { path: 'all', component: AllcountriesComponent },
  { path: 'reg', component: AllregionsComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}