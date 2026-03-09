##### Angular#4

ngClass is another build in directive and is similar to ngStyle. Based on condition, class is attached as here return of isSunday()

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  template: `
  <div>
    <p> Simple ngIf </p>
    <p *ngIf="isDataAvailable">Data Avilable</p>
  </div>

  <div >
  <p> ngIf with else, using ng-template </p>
    <div  [ngStyle] = "{backgroundColor:getColor()}"
          [ngClass] = "{whiteText: !isSunday()}"
    > 
      <p *ngIf="isSunday(); else nonSunday" >Today is Sunday</p>
      <ng-template #nonSunday>
      <p  >Today is a weekday and is non sunday</p>   
    </ng-template>
    </div> 
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

  constructor() {
    setTimeout(()=>{this.isDataAvailable =true}, 3000);
   }

   isSunday():boolean {
     var today = new Date();
     console.log(today.getDay());
    //return 10%2 ===0 ?true:false;
    return today.getDay()===6 ?  true:false;
   } 

   getColor(){
    return this.isSunday()===true ? 'red':'green';
   }

  ngOnInit(): void {
  }

}
```