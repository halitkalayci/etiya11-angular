import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  // aktif http istek sayısı - eşzamanlı isteklerde loading'in erken kapanmaması için sayaç tutuyoruz.
  private readonly activeRequests = signal<number>(0);

  // global okunabilir (subscribable) loading değeri
  readonly loading = computed(() => this.activeRequests() > 0);

  show() {
    this.activeRequests.update((count) => count + 1);
  }

  hide() {
    this.activeRequests.update((count) => Math.max(0, count - 1));
  }
}
