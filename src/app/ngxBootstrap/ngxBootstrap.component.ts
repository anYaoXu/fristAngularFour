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
  public currentPage: number = 1; // # of current page to show  现在是第几页
  public itemsPerPage: number = 2; // # of items per page  每页显示多少条
  public maxSize: number = 2; // max # of page buttons to show at once
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
