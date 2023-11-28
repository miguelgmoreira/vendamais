import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-vendas',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss',
})
export default class VendasComponent {
  basicData = {
    labels: [
      'Apple watch',
      'Bicicleta Fx 3 Disc',
      'Camiseta Coffee Shack',
      'Caneca Typescript',
      'Tênis High Guss',
    ],
    datasets: [
      {
        label: 'Vendas totais',
        data: [540, 325, 702, 620, 336],
        backgroundColor: [
          '#390099',
          '#9e0059',
          '#ff0054',
          '#ff5400',
          '#ffbd00',
        ],
        borderColor: ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'],
        borderWidth: 1,
      },
    ],
  };

  basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#000',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#000',
        },
        grid: {
          color: 'green',
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: '#000',
        },
        grid: {
          color: '#000',
          drawBorder: false,
        },
      },
    },
  };

  data = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
    ],
    datasets: [
      {
        label: 'Apple watch',
        backgroundColor: '#390099',
        borderColor: 'blue',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'Bicicleta Fx 3 Disc',
        backgroundColor: '#9e0059',
        borderColor: 'pink',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
      {
        label: 'Camiseta Coffee Shack',
        backgroundColor: '#ff0054',
        borderColor: 'pink',
        data: [52, 21, 63, 91, 12, 27, 68],
      },
      {
        label: 'Caneca Typescript',
        backgroundColor: '#ff5400',
        borderColor: 'pink',
        data: [40, 33, 77, 12, 34, 54, 35],
      },
      {
        label: 'Tênis High Guss',
        backgroundColor: '#ffbd00',
        borderColor: 'pink',
        data: [87, 55, 47, 89, 93, 44, 99],
      },
    ],
  };

  lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Apple Watch',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#390099',
        tension: 0.4,
      },
      {
        label: 'Bicicleta Fx 3 Disc',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#9e0059',
        tension: 0.4,
      },
      {
        label: 'Camiseta Coffee Shack',
        data: [52, 21, 63, 91, 12, 27, 68],
        fill: false,
        borderColor: '#ff0054',
        tension: 0.4,
      },
      {
        label: 'Caneca Typescript',
        data: [40, 33, 77, 12, 34, 54, 35],
        fill: false,
        borderColor: '#ff5400',
        tension: 0.4,
      },
      {
        label: 'Tênis High Guss',
        data: [87, 55, 47, 89, 93, 44, 99],
        fill: false,
        borderColor: '#ffbd00',
        tension: 0.4,
      },
    ],
  };

  options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: '#000',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#000',
          font: {
            weight: 500,
          },
        },
        grid: {
          color: '#000',
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: '#000',
        },
        grid: {
          color: '#000',
          drawBorder: false,
        },
      },
    },
  };

  horizontalOptions = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: '#000',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#000',
          font: {
            weight: 500,
          },
        },
        grid: {
          color: '#000',
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: '#000',
        },
        grid: {
          color: '#000',
          drawBorder: false,
        },
      },
    },
  };
}
