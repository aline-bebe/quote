import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css']
})
export class FormQuoteComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submit(){
this.addQuote.emit(this.newQuote);
  }
    
    constructor() { }

  ngOnInit() {
  }

}
