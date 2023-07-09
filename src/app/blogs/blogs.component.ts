import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { RequestParams } from '../interfaces/request-params';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'imageUrl', 'title', 'publishedAt', 'updatedAt', 'newsSite' ];

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appService.list$.next(null); 
    let params: RequestParams = {
      _limit: 10,
      _start: 0
    }
    this.appService.getList('blogs', params);
  }


}
