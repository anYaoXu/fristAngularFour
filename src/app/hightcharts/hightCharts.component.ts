import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hight-charts',
  templateUrl: './hightCharts.component.html'
})
export class HightChartsComponent implements OnInit {

  showloading: boolean = true;

  public options: any;
  constructor() {
    setTimeout(() => {
      this.showloading = false;
    }, 3000);
  }

  ngOnInit() {

  }


}
