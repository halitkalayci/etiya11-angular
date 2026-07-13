import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  btnClass = "bg-blue-500"
  title: String = "Typescriptten gelen değer"; // Angular karışamaz
  title2 = signal("Typescriptten gelen değer2"); // Anguları çağırıp
  //değişken tanımla angular arkadaki işlemlerini kendi yapabilir.
  name: String= "halit";
  surname: String = "Kalaycı";

  degerDegistir(): void {
    this.title = "Title Değişti"
    this.title2.set("Title2 Değişti")
  }

  isimDegistir() {
    this.name = "Ahmet"
    this.surname = "Kalaycı2"
  }

  isimDegistir2(event:any){
    this.name=event.target.value;
  }

  konsolaYaz() {
    console.log(this.name)
  }
}
