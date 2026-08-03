import { Component, signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { UpperCasePipe } from '@angular/common';
import { effect } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [Produto, MatButtonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})

export class ListaProdutos {
produtos = signal<{ nome: string; preco: number }[]>([]);
produtoSelecionado = signal<string | null>(null);
carrinho = signal<{ nome: string; preco: number }[]>([]);
carregando = signal(true);
erro = signal<string | null>(null)
totalProdutos = computed(() => this.produtos().length);
 valorTotal = computed(() => {
 return this.produtos()
 .reduce((total, item) => total + item.preco, 0);
 });
 quantidadeCarrinho = computed(() => this.carrinho().length);
 totalCarrinho = computed(() => {
 return this.carrinho()
 .reduce((total, item) => total + item.preco, 0);
 });

constructor(private produtosService: ProdutosService) {
 
 this.carregarProdutos();

 effect(() => {
 console.log('Lista de produtos alterada:', this.produtos());
 });
 effect(() => {
 console.log('Valor total atualizado:', this.valorTotal());
 });
effect(() => {
 if (typeof document !== 'undefined') {
 document.title = `(${this.totalProdutos()}) Minha Loja`;
 }
 });
 }
 carregarProdutos() {
 this.carregando.set(true);

 this.produtosService.buscarProdutos().subscribe({
 next: (dados) => {
 const produtos = this.produtosService.transformarProdutos(dados);
 this.produtos.set(produtos);
 this.carregando.set(false);
 },

 error: (erro) => {
 console.error('Erro ao carregar produtos:,', erro);
 this.erro.set('Erro ao carregar os produtos. Verifique sua conexão e tente novamente!');
 this.carregando.set(false); 
 }
 });
 }
exibirProduto(nome: string) {
 this.produtoSelecionado.set(nome);
 }
 adicionarProduto() {
 this.produtos.update(listaAtual => [
 ...listaAtual,
 { nome: 'Teclado', preco: 250 }
 ]);
 }
 substituirProdutos() {
 this.produtos.set([
 { nome: 'Produto novo', preco: 999 }
 ]);
 }
 adicionarAoCarrinho(produto: { nome: string; preco: number }) {
  this.carrinho.update(listaAtual => [
 ...listaAtual,
 produto
 ]);
 }
}
  