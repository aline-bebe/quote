  import { Component, OnInit } from '@angular/core';
  import { Quote } from '../quote';

  @Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
  })
  export class QuoteComponent implements OnInit {
    quote: Quote[] = [
      new Quote(1, 'life quotes', 'Those who dare to fail miserably can achieve greatly.','bebe',new Date(2018,9,21)),
      new Quote(2,'love quotes','Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.','dydy',new Date(2015,6,9)),
      new Quote(3,'birthday quotes','Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!','pupe',new Date(2016,1,11)),
      new Quote(3,'success quotes','I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.','pupe',new Date(2015,2,12)),
      new Quote(3,'thankful quotes','Kindness is a language which the deaf can hear and the blind can see.','Mark',new Date(2019,1,11)),
      new Quote(3,'Bible quotes','John 8:34 Jesus replied, “I tell you the truth, everyone who sins is a slave to sin.','mwiza',new Date(2019,3,12)),
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
