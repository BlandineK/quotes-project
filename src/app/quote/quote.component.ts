import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote []= [
    {id:1, name:'Do not cry because it is over,smile because it happened.'},
    {id:2, name:'Be yourself everyone else is taken.'},
    {id:3, name:'Life is like riding a bicycle.To keep your balance,you must keep moving.'},
    {id:4, name:'There are only two ways to live your life. One is as though nothing is a miracle . The other is as though everything is a miracle.'},
    {id:5, name:'You must be the change you wish to see in the world.'},
    {id:6, name:'Never give up,trying to do what you really want to do,where there is love and inspiration,you cannot go wrong.'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
