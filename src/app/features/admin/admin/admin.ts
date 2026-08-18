import { Component} from '@angular/core';
import { computed } from '@angular/core';
import { inject } from '@angular/core';
import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '../../../core/facades/auth.facade'; 

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  private authFacade = inject(AuthFacade);
  private router = inject(Router);

  // simulação - indicadores 
  totalProdutosCadastrados = signal(20);
  pedidosPendentes = signal(3);
  usuariosCadastrados = signal(8);

  usuarioAtual = this.authFacade.usuarioAtual;

  mensagemPerfil = computed(() => {
    
    const usuario = this.usuarioAtual();
    
    if (!usuario){
      return('Nenhum usuario Autenticado!');
    }
    return`{Usuario autenticado como: ${usuario.perfil}`;
  });

  sair(){
    this.authFacade.sair();
    this.router.navigateByUrl('/login');
  }
}
