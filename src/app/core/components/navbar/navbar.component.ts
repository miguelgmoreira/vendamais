import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export default class NavbarComponent {
  routes = [
    { nome: 'Meus Produtos', path: '/meus-produtos' },
    { nome: 'Vendas', path: '/vendas' },
    { nome: 'Planos', path: '/planos' },
  ];

  faPlus = faPlus;
}
