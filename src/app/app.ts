import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  btnClass = "bg-blue-500"
  title: String = "Typescriptten gelen değer";

  degerDegistir(): void {
    this.title = "Title Değişti"
  }
}
