import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';


import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { DateCountPipe } from './date-count.pipe';
import { FormQuoteComponent } from './form-quote/form-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
  
    QuotesDetailsComponent,
  
    DateCountPipe,
  
    FormQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
