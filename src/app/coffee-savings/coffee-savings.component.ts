import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
//import {MdSliderModule} from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
//import {CountUpModule} from 'countup.js-angular2/dist/countUp.module';

@Component({
  selector: 'app-coffee-savings',
  templateUrl: './coffee-savings.component.html',
  styleUrls: ['./coffee-savings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  //imports: [CountUpModule],
  outputs: ['totalSavings', 'futureValue', 'numberOfCups', 'numberOfYears']
})


export class CoffeeSavingsComponent implements OnInit {
  //@Input() public numberOfCups: number;
  //@Input() public numberOfYears: number;

  private numberOfCups:number = 2;
  private numberOfYears:number = 20;
  private pricePerCup:number = 5;
  private totalSavings:number;
  private futureValue:any = 0;
  private weeksInAYear: number =  52.14;
  private weeklyDeposit: number;
  private periods : any;
  private rate: number = 0.05;
  private compoundData:any [] = [];
  private compoundDataJson:string;

  constructor(
  ) { }

  ngOnInit() {
      setTimeout(this.calcCoffeeSavings(this.numberOfCups, this.numberOfYears), 1000);
  }

  get cups() {
    return this.numberOfCups;
  }

  get years() {
    return this.numberOfYears;
  }

  private calcCoffeeSavings(numberOfCups, numberOfYears): void {
    this.weeklyDeposit = (this.pricePerCup * numberOfCups) * 5;
    this.totalSavings = ((numberOfCups * 262) * numberOfYears) * this.pricePerCup;
    this.periods = this.weeksInAYear * numberOfYears;

    console.log("Periods: " + this.periods);
    console.log("Cups: " + numberOfCups + "  Years: " + numberOfYears);
    console.log("Weekly Deposit: " + this.weeklyDeposit);
    if (this.futureValue > 0) {
      this.futureValue = 0;
      this.compoundData = [];
      console.log("Future value reset");
    }
    let i:number
    for (i = 1; i <= this.periods; i++ ){
      this.futureValue = (this.weeklyDeposit + this.futureValue) * (1 + (this.rate/this.weeksInAYear));
      this.compoundData.push(this.futureValue.toFixed(2) );
    }
    this.compoundDataJson = JSON.stringify(this.compoundData);
    this.futureValue = this.futureValue.toFixed(2);
    console.log("Future Value: " + this.futureValue);
    //console.log(this.compoundDataJson);
  }

}
