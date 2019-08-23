import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote []= [
    {id:1, name:'Do not cry because it is over,smile because it happened.',description:'Everything happens for a reason,yes it might be good or bad but it still gives you a lesson and makes more stronger.'},
    {id:2, name:'Be yourself everyone else is taken.',description:'Do not try to be someone else just because people want you to be like him or her, just be yourself you are beautiful as you are.'},
    {id:3, name:'Life is like riding a bicycle.To keep your balance,you must keep moving.',description:'Do not give up or stop what you were doing just because of one thing that did not go well,keep going the best is ahead'},
    {id:4, name:'There are only two ways to live your life. One is as though nothing is a miracle . The other is as though everything is a miracle.',description:'Do not anything suprise you always be ready for the feedback cause that is when it will not affect you that much'},
    {id:5, name:'You must be the change you wish to see in the world.',description:'Do not wait for someone to make a change that you wish to see in this world.Just step forward and be that courageous to make the change by yourself and then inspire others'},
    {id:6, name:'Never give up,trying to do what you really want to do,where there is love and inspiration,you cannot go wrong.',description:'Never give up cause you might be on the way to reaching to your goal and always be positive in what you do and ask for help when needed.'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
