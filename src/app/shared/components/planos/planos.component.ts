import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, FontAwesomeModule],
  templateUrl: './planos.component.html',
  styleUrl: './planos.component.scss',
})
export default class PlanosComponent {
  faStar = faStar;

  options = {
    starter: [
      'Até 30 produtos',
      'Gerenciamento de pedidos centralizado entre marketplaces',
      'Estoque centralizado entre marketplaces',
      'Catálogo digital personalizável',
      'Criação de produtos com modelos pré-cadastrados',
      'Estatísticas de acesso ao catálogo',
      'Customização de design do catálogo',
      'Análise competitiva de preços',
      'Insights sobre estoque',
    ],
    plus: [
      'Produtos ilimitados',
      'Gerenciamento de pedidos centralizado entre marketplaces',
      'Estoque centralizado entre marketplaces',
      'Catálogo digital personalizável',
      'Criação de produtos com modelos pré-cadastrados',
      'Estatísticas de acesso ao catálogo',
      'Customização de design do catálogo',
      'Análise competitiva de preços',
      'Insights sobre estoque',
      'Categorias de catálogo personalizadas',
      'Customização de compras no catálogo digital',
      'Tranferencia de forma simples do saldo de vendas dos marketplaces para o venda+',
    ],
  };
}
