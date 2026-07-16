import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Greeting } from '../../components/greeting/greeting';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, Greeting],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  showAlert(name: String)
  {
    alert(`tıklandı: ${name}`)
  }
}
