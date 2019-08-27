import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Do not cry because it is over,smile because it happened.','Dr Seuss','Everything happens for a reason,yes it might be good or bad but it still gives you a lesson and makes more stronger.',new Date(2019,8,23)),
    new Quote(2, 'Be yourself everyone else is taken.','Oscar Wilde','Do not try to be someone else just because people want you to be like him or her, just be yourself you are beautiful as you are.',new Date(2019,8,23)),
    new Quote(3, 'Life is like riding a bicycle.To keep your balance,you must keep moving.','Albert Einstein','Do not give up or stop what you were doing just because of one thing that did not go well,keep going the best is ahead',new Date(2019,8,23)),
    new Quote(4, 'There are only two ways to live your life. One is as though nothing is a miracle . The other is as though everything is a miracle.','Albert Einstein','Do not anything suprise you always be ready for the feedback cause that is when it will not affect you that much',new Date(2019,8,23)),
    new Quote(5, 'You must be the change you wish to see in the world.','Mahatma Gandhi','Do not wait for someone to make a change that you wish to see in this world.Just step forward and be that courageous to make the change by yourself and then inspire others',new Date(2019,8,23)),
    new Quote(6, 'Never give up,trying to do what you really want to do,where there is love and inspiration,you cannot go wrong.','Mark Twain','Never give up cause you might be on the way to reaching to your goal and always be positive in what you do and ask for help when needed.',new Date(2019,8,23)),
  ];
  More(index){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
   deleteQuote (isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
   constructor() { }

  ngOnInit() {
  }

}
