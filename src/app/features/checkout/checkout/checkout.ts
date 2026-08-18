import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { signal } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'; 
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms'; 
import { Validators } from '@angular/forms'; 
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { AuthFacade } from '../../../core/facades/auth.facade';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';


@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, RouterLink,PrecoFormatadoPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

  CarrinhoFacade = inject(CarrinhoFacade);
  router = inject(Router);
  authFacade = inject(AuthFacade);

  formulario = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(3), nomeSemNumeros]),
    email: new FormControl('',[Validators.required, Validators.email]),
    endereco: new FormControl('',[Validators.required, Validators.minLength(5)]),
  });

  finalizar () {
    this.compraFinalizada.set(false); //impede de finalizar a compra se o carrinho tiver vazio
    if(this.CarrinhoFacade.carrinhoVazio()){
      console.log('Não é possivel finalizar a compra com o carrinho vazio!');
      return;
    }
    if(this.formulario.invalid){
      console.log('Formulário invalido!');
      this.formulario.markAllAsTouched();
      return;
    }
    const dados = this.formulario.value;
    const itens = this.CarrinhoFacade.itensCarrinho();
    const total = this.CarrinhoFacade.totalCarrinho();

    console.log('Compra finalizada com sucesso!');
    console.log('Dados do Formulario:', dados);
    console.log('Itens do carrinho:', itens);
    console.log('Total da compra:', total);

    this.CarrinhoFacade.limparCarrinho();
    this.formulario.reset();
    this.compraFinalizada.set(true);
  }

  compraFinalizada = signal(false); 

  sair(){
    this.router.navigateByUrl('/login');
  }

}

function nomeSemNumeros(control: AbstractControl): ValidationErrors | null{
  const valor = control.value;
  if (!valor) return null;

  if (/\d/.test(valor)){
    return {numeroInvalido: true};
  }
  return null;



}

