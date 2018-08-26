import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  returnString: string;
  @Input()
  inputString: string[];

  constructor() { }

  ngOnInit() {
    this.returnString = '';
  }

  // les 10 dernières lettres de l’input de l’enfant 1 s’affichent en title case
  // (majuscule pour la première lettre de chaque mot, minuscule pour le reste) avec un délai de 2 secondes
  onClick(event): void {
    const tempArray = this.inputString.slice(this.inputString.length - 10);
    tempArray.forEach((letter) => {
      this.returnString = this.returnString.concat(letter);
      setTimeout(() => {this.returnString = ''; }, 2000);
    });
  }
}
