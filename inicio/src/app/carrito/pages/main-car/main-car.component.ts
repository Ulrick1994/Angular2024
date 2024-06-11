import { Component } from '@angular/core';
import { Productos } from '../../interfaces/productos-interface';

@Component({
  selector: 'app-main-car',
  templateUrl: './main-car.component.html',
  styleUrl: './main-car.component.css'
})
export class MainCarComponent {
  public productoList: Productos[] = [
    {
      nombre: 'Cafe Ole',
      descripcion: '250ml',
      precio: 30,
    },
    {
      nombre: 'Arroz Valle Verde',
      descripcion: '100gr',
      precio: 45,
    },
    {
      nombre: 'Maruchan Habanero',
      descripcion: '200gr',
      precio: 20,
    },
    {
      nombre: 'Coffe Mate',
      descripcion: '350gr',
      precio: 40,
    },
    {
      nombre: 'Galletas Emperador',
      descripcion: '150gr',
      precio: 20,
    },
    {
      nombre: 'Gansito',
      descripcion: '50gr',
      precio: 15,
    },
    {
      nombre: 'Squirt',
      descripcion: '600gr',
      precio: 20,
    },
    {
      nombre: 'Yogurt Griego',
      descripcion: '350gr',
      precio: 80,
    },
  ];

  public nuevoProduct(nuevo: Productos): void {
    this.productoList.push(nuevo);
  }
  public eliminarProducto(index: number): void {
    this.productoList.splice(index, 1);
  }
}