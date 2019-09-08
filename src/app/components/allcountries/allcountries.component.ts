import { Component, OnInit } from '@angular/core';
import { CserviceService } from '../../cservice.service'

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})

export class AllcountriesComponent implements OnInit {
  constructor(private cdata:CserviceService) { }
  _allcountries:any=[];
  _pageTitle: string = "All Countries"
  _count: number;
  _regionCode:string='';
  
  ngOnInit() {
    this.getCountries();
  }
  
  getCountries() {
    this.cdata._gotrc.subscribe({
      next: (v) => this._regionCode = v
    });

  this.cdata.getData(this._regionCode).subscribe(
    data => {
      this._allcountries = data;
      this._count = this._allcountries.length;
    }
  );
  }
}
