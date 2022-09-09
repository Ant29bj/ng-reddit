import { Component } from '@angular/core';
import { ArticleModel } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  article! : ArticleModel[];
  constructor(){
    this.article = [
      new ArticleModel('Angular','http://angular.io',3),
      new ArticleModel('Fullstack','http://Fullstack.io',2),
      new ArticleModel('Angular Homepage','http://angular.io',1)
    ]; 
  }

  addArticle(title:HTMLInputElement, link: HTMLInputElement): boolean { 
    console.log(`Adding article title: ${title.value} and link: ${link.value}`); 
    this.article.push(new ArticleModel(title.value,link.value,0));
    title.value = "" ;
    link.value = "";
    return false; 
  }

  sortedArticle() : ArticleModel[]{
    return this.article.sort((a:ArticleModel, b:ArticleModel)=> b.votes - a.votes);
  }
 
}
