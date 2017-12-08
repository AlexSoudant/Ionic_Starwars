import { Component } from '@angular/core';
import { NewsProvider } from './../../providers/news/news';
import { Observable } from 'rxjs/Observable';
import { News } from '../../interfaces/news.interface';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  allNews: Observable<News[]>;

  constructor(public newsProvider: NewsProvider) {

    this.allNews = newsProvider.getAll();

  }


}
