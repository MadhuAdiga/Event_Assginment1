import { Component } from '@angular/core';

@Component({
  selector: 'my-app',//selector
  template: `
    <div class="container container-fluid">
    <h2> Events: Assignment 1</h2><br>
      <label> Parent Component Value</label>
      <input type="text" #parentText (keyup)="0"><br>
      <h5>Value from Child Component is  {{parentData}}</h5><!--Display the data fetched from the child emitter-->
      <child (eventData)="parentData=($event)" [childData]="parentText.value"></child><!--Send data to child through childData variable and receive data in eventData variable-->
    </div>  
  `
})
 
export class AppComponent {
  public parentData:string;//Variable to store data fected from child component
}