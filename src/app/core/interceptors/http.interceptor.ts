import { HttpInterceptorFn } from '@angular/common/http';
import { tap, catchError, throwError } from 'rxjs';
export const httpInterceptor: HttpInterceptorFn = (req, next) => {

console.log('REQUEST', req.url);

const token = 'fake-jwt-token';
const novaReq = req.clone({
setHeaders: {
Authorization: `Bearer ${token}`,
},
});

return next(novaReq).pipe(
tap({
next: (event) => console.log('RESPONSE:', event),
error: (error) => console.error('ERRO:', error),
}),
catchError((error) => {
console.error('ERRO GLOBAL:', error);
if (error.status === 401) {
console.warn('Não autorizado!');
}
if (error.status === 500) {
console.warn('Erro interno do servidor!');
}
return throwError(() => error);
}),
);
};