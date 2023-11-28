import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

import { DataViewModule } from 'primeng/dataview';

import { TagModule } from 'primeng/tag';
import { Produto } from './interfaces/product';
import { ProductsListService } from './services/products-list.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, DataViewModule, FontAwesomeModule, TagModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export default class ProductsListComponent implements OnInit {
  faTag = faTag;

  products: Produto[] = [];

  constructor(private productsListService: ProductsListService) {}

  ngOnInit(): void {
    this.products = this.productsListService.getProdutos();
  }

  getSeverity(product: Produto) {
    switch (product.disponibilidadeDeEstoque) {
      case 'Em estoque':
        return 'success';

      case 'Últimas unidades':
        return 'warning';

      case 'Fora de estoque':
        return 'danger';

      default:
        return null;
    }
  }

  getMarketPlacesImage(marketplace: string) {
    switch (marketplace) {
      case 'Mercado Livre':
        return 'https://startse-uploader.s3.us-east-2.amazonaws.com/mercado_livre_c1a918503a.jpg';

      case 'Amazon':
        return 'https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png';

      case 'Aliexpress':
        return 'https://www.otempo.com.br/image/contentid/policy:1.2615174:1645129000/image.png?f=3x2&q=0.6&w=1200&$p$f$q$w=e583206';

      case 'Shopee':
        return 'https://t2.tudocdn.net/686406?w=1200&h=1200';

      default:
        return null;
    }
  }
}
