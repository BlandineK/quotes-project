import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Do not cry because it is over,smile because it happened.', 'Everything happens for a reason,yes it might be good or bad but it still gives you a lesson and makes more stronger.',new Date(2019,8,23)),
    new Quote(2, 'Be yourself everyone else is taken.', 'Do not try to be someone else just because people want you to be like him or her, just be yourself you are beautiful as you are.',new Date(2019,8,23)),
    new Quote(3, 'Life is like riding a bicycle.To keep your balance,you must keep moving.', 'Do not give up or stop what you were doing just because of one thing that did not go well,keep going the best is ahead',new Date(2019,8,23)),
    new Quote(4, 'There are only two ways to live your life. One is as though nothing is a miracle . The other is as though everything is a miracle.', 'Do not anything suprise you always be ready for the feedback cause that is when it will not affect you that much',new Date(2019,8,23)),
    new Quote(5, 'You must be the change you wish to see in the world.', 'Do not wait for someone to make a change that you wish to see in this world.Just step forward and be that courageous to make the change by yourself and then inspire others',new Date(2019,8,23)),
    new Quote(6, 'Never give up,trying to do what you really want to do,where there is love and inspiration,you cannot go wrong.',   'Never give up cause you might be on the way to reaching to your goal and always be positive in what you do and ask for help when needed.',new Date(2019,8,23)),
  ];
  More(index){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }
   completeQuote(isComplete, index){
     if (isComplete) {
       this.quotes.splice(index,1);
     }
   }
  
   constructor() { }

  ngOnInit() {
  }

}
