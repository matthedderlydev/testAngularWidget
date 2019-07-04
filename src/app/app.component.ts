import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{

@Input() value = 0;
@Input() maxValue= 10;
@Input() minValue= 0;



numberUp(){
  if(this.value < this.maxValue){

  this.value++;
  }else{
    this.value = this.maxValue;
  }
}

numberDown(){
  if(this.value > this.minValue){
  this.value--;

  }else{
    this.value = this.minValue;
  }
}


}
