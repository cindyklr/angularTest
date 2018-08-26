import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',

})
export class Child1Component implements OnInit {

  input: string;
  @Output()
  inputChild: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChangeValue(inputValue: string): void {
    this.inputChild.emit(inputValue);
  }
}
