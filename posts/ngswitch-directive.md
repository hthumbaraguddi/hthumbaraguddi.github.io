##### Angular#7

Here is a simple example of ngSwitch directive. Following code is just for example and may not good as a solution.

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  template: `
    <div [ngSwitch]=numDay>
      <div *ngSwitchCase="1"><p>Today is {{dayOftheWeek}}</p></div>
      <div *ngSwitchCase="2"><p>Today is {{dayOftheWeek}}</p></div>
      <div *ngSwitchCase="3"><p>Today is {{dayOftheWeek}}</p></div>
      <div *ngSwitchCase="4"><p>Today is {{dayOftheWeek}}</p></div>
      <div *ngSwitchCase="5"><p>Today is {{dayOftheWeek}}</p></div>
      <div *ngSwitchCase="6"><p>Today is {{dayOftheWeek}}</p></div>
      <div *ngSwitchCase="7"><p>Today is {{dayOftheWeek}}</p></div>
      <div *ngSwitchDefault>This is Default</div>
    </div>  
  `,
  styles:[`
  .whiteText{
    color:white;
  }
  `]
})
export class DirectiveExampleComponent implements OnInit {

  isDataAvailable:boolean = false;
  dayOftheWeek: any;
  daysOfWeek:any =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  num: number= 0;
  numDay: number | undefined;
  constructor() {
    this.whatDayToday()
  }
   whatDayToday(){
    var d = new Date();
    this.numDay  = d.getDay();
    this.dayOftheWeek = this.daysOfWeek[this.numDay];
    console.log(this.numDay);
   }
  ngOnInit(): void {
  }
}
```