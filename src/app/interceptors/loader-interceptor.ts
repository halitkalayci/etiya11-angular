import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize } from 'rxjs';
import { LoaderService } from '../services/loader-service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  // Global loading değerini servis üzerinden yönetiyoruz, böylece her istekte loading screen gösterebiliriz.
  const loaderService = inject(LoaderService);
  loaderService.show();
  return next(req).pipe(
    finalize(() => loaderService.hide()),
    catchError((err) => {
      console.log(err);
      throw err;
    })
  );
};
