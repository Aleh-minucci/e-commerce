import { Component } from '@angular/core';
import { UpperCasePipe, CurrencyPipe} from '@angular/common';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
//produto = 'Notebook';
//preco = 1200.99;
//mostrarPreco = true;
//mostrarProduto = true;
produtos  = [
  {produto:'Monitor',preco: 1000},
  {produto:'Teclado',preco: 300},
  {produto:'Mouse',preco: 250},
  {produto:'Cadeira',preco: 600},
  {produto:'Placa de vídeo',preco: 2000}
];
}
