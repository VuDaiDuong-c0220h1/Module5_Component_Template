import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickShowButton = new EventEmitter<string>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickEditArticle = new EventEmitter<string>();
  isShow = false;
  isShowEdit = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showContent() {
    this.isShow = !this.isShow;
  }

  // tslint:disable-next-line:typedef
  gotoLink() {
    this.onClickShowButton.emit('Redirect to ' + this.article.link);
  }

  // tslint:disable-next-line:typedef
  showEdit() {
    this.isShowEdit = !this.isShowEdit;
  }

  // tslint:disable-next-line:typedef
  edit() {
    this.onClickEditArticle.emit('Sửa thành công');
  }
}
