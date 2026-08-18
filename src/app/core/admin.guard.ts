import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivateFn } from "@angular/router";
import { AuthFacade } from "./facades/auth.facade"; 

export const adminGuard: CanActivateFn = () => {

    const router = inject(Router);
    const authFacade = inject(AuthFacade);

    //! 1- verificar se o usuario esta logado
    if(!authFacade.usuarioLogado()){
        return router.createUrlTree(['/login']);
    }
    //! 2- verificar se o usuario atual (logado), se tem perfil adm
    if (!authFacade.admin()){
        return router.createUrlTree(['/acesso-negado']);
    }
    //! 3- se usuario estiver logado e for adm = ACESSO LIBERADO

    return true;
};