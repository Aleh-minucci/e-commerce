import { Component, Input,Output, EventEmitter} from '@angular/core';
import { UpperCasePipe, CurrencyPipe} from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { ListaProdutos } from '../lista-produtos/lista-produtos';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe, MatButtonModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  //entrada de dados de lista-produtos.ts
  @Input() nome: string = '';
  @Input() preco: number = 0;
  //saida de dadosde produtos selecionados para lista-produtos.ts
@Output() produtoSelecionado = new EventEmitter<string>();

selecionarProduto() {
  this.produtoSelecionado.emit(this.nome);
}
@Output() produtoAdicionado = new EventEmitter<{
  nome: string;
  preco: number;
}>();
adicionarAoCarrinho() {
  this.produtoAdicionado.emit({ nome: this.nome, preco: this.preco});
}
}
