import { Component, OnInit } from '@angular/core';
import { CserviceService } from '../../cservice.service'

@Component({
  selector: 'app-allregions',
  templateUrl: './allregions.component.html',
  styleUrls: ['./allregions.component.css']
})
export class AllregionsComponent implements OnInit {
  _regionArr: any = [];
  _allcountries: any = [];
  _pageTitle: string = "World's Region"
  _regionCount: number;
  _regions:any = [];

  constructor(private cdata:CserviceService) { }
  ngOnInit() {
    //using service RestcoutriesService to get all the data on first load to filter regions only
    this.cdata.getData('').subscribe(
      data => {
        this._allcountries = data;
        this._regionArr = this.cdata.getUniqeValues(this._allcountries, 'region');
        this._regions = this._regionArr.filter(function (el) {
          return el != '';
        });
        this._regionCount = this._regions.length;
       }
      );
    }

    getRegCode(rc){
      this.cdata.serviceRC(rc)
    }
  }
