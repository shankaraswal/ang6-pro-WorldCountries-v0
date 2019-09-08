import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllcountriesComponent } from './components/allcountries/allcountries.component';
import { AppRoutingModule } from './app-routing.module';
import { AllregionsComponent } from './components/allregions/allregions.component';

import { CserviceService } from './cservice.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DashboardComponent,
    AllcountriesComponent,
    AllregionsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [CserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
