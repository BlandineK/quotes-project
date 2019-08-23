import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes :string[];

  constructor(){
    this.quotes = ['Do not cry because it is over,smile because it happened.','Be yourself everyone else is taken.','Life is like riding a bicycle.To keep your balance,you must keep moving.','There are only two waysto live your life.One is as though nothing is a miracle .The other is as though everything is a miracle.','You must be the change you wish to see in the world.','Never give up,trying to do what you really want to do,where there is love and inspiration,you cannot go wrong.']
  }
}

