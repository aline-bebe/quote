import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    new Quote(1, 'life quote', 'Those who dare to fail miserably can achieve greatly.','bebe',new Date(2019,9,14)),
    new Quote(2,'love quote','I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.','dydy',new Date(2019,6,9)),
    new Quote(3,'birthday quote','Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world','pupe',new Date(2019,1,12)),
    new Quote(3,'success quote','Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world','pupe',new Date(2019,1,12)),
    new Quote(3,'thankful quote','Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world','pupe',new Date(2019,1,12)),
  ];

words(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  delete(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  addNewQuote(read){
    let readLength = this.quote.length;
  read.id = readLength+1;
    read.completeDate = new Date(read.completeDate)
    this.quote.push(read)
  }

  
  constructor() { }

  ngOnInit() {
  }

}
