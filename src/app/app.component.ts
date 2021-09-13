import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  discount_type:string;
  discount_amount: number;
  discount_amount_error=false;
  selling_price: number;
  selling_price_error=false;
  event_price: number;
  final_event_price:number;
  event_price_error=false;
  start_date: number;
  start_date_error= false;
  end_date: number;
  end_date_error= false;
constructor(){


}

  ngOnInit(){



  }
  clearValues(){
    this.discount_amount=null;
    this.selling_price = null;
    this.final_event_price = null;
  }
 calculateDiscount(){

  if(!this.discount_amount)
    {
      this.discount_amount_error=true;
    }
    if(!this.selling_price)
    {
      this.selling_price_error= true;
    }

  }
    onItemChange(value){
      if(value == 'percentage'){

        this.event_price= this.selling_price * this.discount_amount / 100;
        this.final_event_price = this.selling_price - this.event_price;
      }
      if(value == 'dollar'){
        this.event_price = this.selling_price - this.discount_amount;
        this.final_event_price = this.event_price;

      }
    }


}
