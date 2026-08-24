import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { inject, Injectable} from '@angular/core';
import { AuthFacade } from '../../../core/facades/auth.facade';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, RouterLink, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Lojinha da Aleh'; //nome do e-commerce

  private CarrinhoService = inject(CarrinhoFacade);
  private authfacade = inject(AuthFacade);
  private router = inject(Router)
  usuarioLogado = this.authfacade.usuarioLogado;
  usuarioAtual = this.authfacade.usuarioAtual;
  quantidade = this.CarrinhoService.quantidadeCarrinho;
 

sair(){
  this.authfacade.sair();
  this.router.navigateByUrl('/login');
}
}
                  