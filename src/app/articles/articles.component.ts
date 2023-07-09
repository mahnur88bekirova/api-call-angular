import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { RequestParams } from '../interfaces/request-params';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  displayedColumns: string[] = ['id', 'imageUrl', 'title', 'publishedAt', 'updatedAt', 'newsSite' ];

  constructor(public appService: AppService, private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.searchForm = this.formBuilder.group({ 
      _limit: null
    }); 
    this.getList();
  }

  getList() {
    this.appService.list$.next(null);
    let searchFormValue = this.searchForm.value;
    let params: RequestParams = {
      _limit: searchFormValue._limit ?? 10,
      _start: 0
    }
    this.appService.getList('articles', params);
  }

  public onSubmitSearchForm(){
    this.getList();
  }
  
}
