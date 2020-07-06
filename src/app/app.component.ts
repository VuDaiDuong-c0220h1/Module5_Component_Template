import {Component} from '@angular/core';
import {ArticleComponent} from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  content = '';
  link = '';

  articles: Article[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      content: 'Lorem Ipsum 1',
      link: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      content: 'Lorem Ipsum 2',
      link: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      content: 'Lorem Ipsum 3',
      link: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      content: 'Lorem Ipsum 4',
      link: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      content: 'Lorem Ipsum 5',
      link: 'https://ruslanspivak.com/lsbaws-part1/'
    }];

  // tslint:disable-next-line:typedef
  showArticleContent(e) {
    alert(e);
  }

  // tslint:disable-next-line:typedef
  editArticle(e) {
    alert(e);
  }

  addArticle(): void {
    this.articles.push({
      title: this.title,
      content: this.content,
      link: this.link
    });
  }
}
