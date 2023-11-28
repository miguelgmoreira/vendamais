import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  private produtos: Produto[] = [
    {
      nome: 'Apple watch',
      categoria: 'Smart watches',
      preco: '2.099.00',
      imagem:
        'https://geforthstore.com/cdn/shop/products/product-image-1412724796_800x.jpg?v=1590005082',
      disponibilidadeDeEstoque: 'Em estoque',
      marketplaces: ['Mercado Livre', 'Amazon', 'Shopee', 'Aliexpress'],
    },
    {
      nome: 'Bicicleta Fx 3 Disc',
      categoria: 'Esporte',
      preco: '3.400,00',
      imagem:
        'https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FX3Disc_22_35021_D_Portrait',
      disponibilidadeDeEstoque: 'Fora de estoque',
      marketplaces: ['Mercado Livre'],
    },
    {
      nome: 'Camiseta Coffee Shack',
      categoria: 'Vestimenta',
      preco: '149,99',
      imagem:
        'https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg',
      disponibilidadeDeEstoque: 'Últimas unidades',
      marketplaces: ['Mercado Livre', 'Amazon'],
    },
    {
      nome: 'Caneca Typescript',
      categoria: 'Canecas',
      preco: '68,99',
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRkwybvylxK5loKz3pSvQhY6Q-FzgxyGyeQ&usqp=CAU',
      disponibilidadeDeEstoque: 'Em estoque',
      marketplaces: ['Mercado Livre', 'Aliexpress'],
    },
    {
      nome: 'Tenis high guss',
      categoria: 'Calçados',
      preco: '1.449,99',
      imagem:
        'https://gussclothes.com/cdn/shop/products/S71c6d2020a85428195da1441c1595642X.jpg?v=1686695645',
      disponibilidadeDeEstoque: 'Últimas unidades',
      marketplaces: ['Mercado Livre', 'Amazon'],
    },
  ];

  constructor() {}

  getProdutos() {
    return this.produtos;
  }
}
