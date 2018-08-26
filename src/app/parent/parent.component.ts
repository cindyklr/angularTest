import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  arrayValues: string[];
  style: string;

  constructor() { }

  ngOnInit() {
  }

  onEmitValue(event) {
    this.arrayValues = new Array<string>();
    for (let i = 0; i < event.length; i++) {
      this.arrayValues.push(event[i]);
    }
  }

  // vérifie si la lettre est une voyelle et indique la classe css a appliquée en conséquence
  isVowel(letter: string): string {
      const vowels = 'aeiouy';
      if (vowels.includes(letter)) {
        this.style = 'orange';
      } else {
        this.style = 'letter-color';
      }
      return this.style;
  }

}
