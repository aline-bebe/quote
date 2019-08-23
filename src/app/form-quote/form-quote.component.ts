import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css']
})
export class FormQuoteComponent implements OnInit {
  newGoal = new Quote(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Quote>();

  submit(){
this.addGoal.emit(this.newGoal);
  }
    
    constructor() { }

  ngOnInit() {
  }

}
