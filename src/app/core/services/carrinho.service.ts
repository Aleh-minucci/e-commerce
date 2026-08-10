import { Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { computed } from "@angular/core";

type ItemCarrinho = {
    nome: string;
    preco: number;
}

@Injectable({
    providedIn:'root'
})

export class CarrinhoService {
    
    private carrinho = signal<ItemCarrinho[]>([]);


itens = computed(() => this.carrinho());
quantidadedeitens = computed(() => this.carrinho().length);
totalitens = computed(() => 
    this.carrinho().reduce((total, itens) => total + itens.preco,0)
);

carrinhoVazio = computed(() => this.carrinho().length === 0); //verificar se o carrinho esta vazio

//todo: acoes
adicionar(produto: ItemCarrinho ){
    this.carrinho.update(lista =>[ ...lista, produto ]);
}

limpar() {
    this.carrinho.set([]);
}
}