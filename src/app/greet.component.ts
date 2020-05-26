import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-greet',
  template: `
  <h1>Greetings </h1>
  <h3>{{greetMessage}}</h3>
  <input type='text' [(ngModel)]='message' />
  Hello {{message}}
  <button (click)='greet()'>sayHello</button>
  `
})
export class GreetComponent implements OnInit {

  @Input() greetMessage : string;
  message: string;  
  @Output() sendMessageEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  greet(): void {
    this.sendMessageEvent.emit('Hello From Greet Component');

  }

}

@NgModule({
    declarations :[GreetComponent],
    imports:[FormsModule]
})
class GreetComponentModule{}
