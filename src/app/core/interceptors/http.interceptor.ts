import { HttpInterceptorFn } from '@angular/common/http';
import { tap, catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthFacade } from '../facades/auth.facade'; 

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

    const authFacade = inject(AuthFacade);
//!NOVO METODO DE 
console.log('Requisição', req.url);
//!REQUISIÇÃO DE LOG
const token = authFacade.obterPerfil();
//!TOKEN
const novaReq = token ?
 req.clone({
    setHeaders: {
        Authorization: `Bearer ${token}`
    },
 }):req;

//!NOVA REQUISIÇÃO + RESPOSTA DE LOG
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