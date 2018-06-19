import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-ngxBootstrap',
  templateUrl: './ngxBootstrap.component.html'
})
export class NgxBootstrapComponent implements OnInit {
  public masterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  public items = [];

  // Pagination
  public currentPage: number = 1; // # of current page to show
  public itemsPerPage: number = 3; // # of items per page
  public maxSize: number = 3; // max # of page buttons to show at once
  public totalItems: number; // total # of items
  constructor(public http: Http) {
    this.onPageChange({page: this.currentPage, itemsPerPage: this.itemsPerPage});
  }

  ngOnInit() {
  }

  onPageChange(page) {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : this.masterList.length;
    this.items = this.masterList.slice(start, end);
  }


}
