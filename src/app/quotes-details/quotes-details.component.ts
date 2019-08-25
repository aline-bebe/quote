import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  Delete(complete:boolean){
    this.isComplete.emit(complete);
  }
  votequote = 0;
  
  voteshow(){

  this.votequote = this.votequote+ 1;

  }
  downloadquote = 0;
 
  
  downloadshow(){

 this. downloadquote = this. downloadquote+ 1;

  }

  constructor() { }

  ngOnInit() {
  }

}
