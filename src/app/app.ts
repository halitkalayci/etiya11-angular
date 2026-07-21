import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderService } from './services/loader-service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private loaderService = inject(LoaderService);

  // template'de overlay-loader'ı göster/gizle için global loading değeri
  loading = this.loaderService.loading;
}
