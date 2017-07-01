import { Component, Input, Output, EventEmitter  } from '@angular/core';//Import Input and Output decorator metadata 
import { AppComponent } from './app.component'

@Component({
  selector: 'child',//selector
  template: `
      <br><hr><br><label> Child Component Value</label>
      <input type="text" #childText (keyup)="onChange(childText.value)">
      <h5>Value from Parent Component is {{childData}}</h5><!-- Display data from Parent component-->
  `
})
 
export class ChildComponent {
    @Input() childData:string;//Received data from parent component
    @Output() eventData = new EventEmitter();//Emits data to parent

    onChange(value:any){//On changes to the input in child
        this.eventData.emit(value);//On input text, emit value to parent
    }
}