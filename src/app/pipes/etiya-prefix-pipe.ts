import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etiyaPrefix',
})
export class EtiyaPrefixPipe implements PipeTransform {
  transform(value: string, hasBrackets: boolean=true): string {
    if (hasBrackets)
    {
      return "[ETİYA] - " + value;
    }
    return "ETİYA - " + value;
  }
}

// "Katalog Bilgisi:" "[ETİYA] - MODEM" "[TT] - MODEM"
