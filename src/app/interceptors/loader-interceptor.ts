import { HttpInterceptorFn } from '@angular/common/http';
import { signal } from '@angular/core';
import { catchError, finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  // TODO: Global değişkene alırsan, her istekte bir loading screen gösterebilirsin.
  const loading = signal<boolean>(true);
  return next(req).pipe(
    finalize(() => loading.set(false)),
    catchError((err) => {
      console.log(err);
      throw err;
    })
  );
};
