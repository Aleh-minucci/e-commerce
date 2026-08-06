import { Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { computed } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CarrinhoService {
    //!EStado global
    private carrinho = signal<{nome: string; preco: number}[]>([]);

//? seletores
itens = computed(() => this.carrinho());
quantidadedeitens = computed(() => this.carrinho().length);
totalitens = computed(() => 
    this.carrinho().reduce((total, itens) => total + itens.preco,0)
);

//todo: acoes
adicionar(produto: {nome: string; preco: number}){
    this.carrinho.update(lista =>[ ...lista, produto ]);
}

limpar() {
    this.carrinho.set([]);
}
}