import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../../core/facades/auth.facade'; 


@Component({
  selector: 'app-acesso-negado',
  imports: [RouterLink],
  templateUrl: './acesso-negado.html',
  styleUrl: './acesso-negado.css',
})
export class AcessoNegado {
  private authFacade = inject(AuthFacade); //!teste em producao
  sair = this.authFacade.sair(); //!teste em producao
}
