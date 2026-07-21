import { CurrencyPipe, LowerCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EtiyaPrefixPipe } from '../../pipes/etiya-prefix-pipe';

@Component({
  selector: 'app-about',
  imports: [RouterModule, LowerCasePipe, CurrencyPipe, EtiyaPrefixPipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  price = signal<number>(132.49);
  name = signal<string>("Halit Enes KALAYCI")
  product = signal<string>("Modem")

  normalizeCurrency(value: number): string {
    return value.toLocaleString('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    });
  }
}
