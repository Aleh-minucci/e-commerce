import { Component, signal, computed, effect } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = signal([
    {nome: 'Teclado Gamer', preco:149.99},
    {nome: 'Mouse Gamer', preco:299.99},
    {nome: 'Desktop Gamer', preco:1599.99},
    {nome: 'Monitor Gamer', preco:4999.99},
    {nome: 'Headset Gamer', preco:699.99}
  ]);
  exibirProduto (nome: string){
    //console.log ('Produto Selecionado:', nome);
    this.produtoSelecionado.set(nome);
  }
  adicionarProduto(){
    this.produtos.update(listaAtual =>[
      ...listaAtual, {nome:'Processador Inter Core i5', preco:646}
    ]);
  }
    totalProdutos = computed(() => this.produtos().length);

    valorTotal = computed(() => { return this.produtos().reduce((total, item) => total + item.preco,0)});

    substituirProdutos (){
      this.produtos.set([
        {nome: 'Teclado', preco: 40},
        {nome: 'Mouse', preco: 10},
        {nome: 'monitor', preco: 100},
        {nome: 'Desktop', preco: 500},
        {nome: 'Headset', preco: 25},
      ]);
    }
constructor(){
  effect(() => {
    console.log('Lista de Produtos Alterada:', this.produtos());
  });
  effect(() => {
    console.log('Valor total atualizado', this.valorTotal());
  });
  effect(() => {
    if (typeof document !== 'undefined'){
      document.title = '${this.totalProdutos()} - MInha Loja';
        }
  });
}
produtoSelecionado = signal<string |null>(null);
carrinho = signal<{ nome: string; preco: number}[]>([]);
adicionarAoCarrinho(produto: { nome: string; preco: number }){
  this.carrinho.update(listaAtual => [
    ...listaAtual,produto])};
    quantidadeCarrinho = computed(() => this.carrinho().length);
    totalCarrinho = computed(() => {
      return this.carrinho().reduce((total, item) => total + item.preco,0);
    });
  };