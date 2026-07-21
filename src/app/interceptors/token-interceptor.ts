import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // 10larca interceptor olabilir.
  // next diyerek diğer interceptorlara geçiş yapıyoruz.
  console.log("tokenInterceptor devrede")

  const token = localStorage.getItem('token');

  if(token)
  {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(clonedReq);
  }

  return next(req);
};

// http isteği -> 1. incerceptor -> 2. interceptor -> 3. interceptor -> backend
