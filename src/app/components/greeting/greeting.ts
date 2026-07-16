import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  // Dışarıdan bu componenta bu değer geçilebilir.
  @Input() name: String = "Enes";
  @Output() onSelamlaClick = new EventEmitter<String>();

  doSmtng() {
    this.onSelamlaClick.emit(this.name);
  }
}
