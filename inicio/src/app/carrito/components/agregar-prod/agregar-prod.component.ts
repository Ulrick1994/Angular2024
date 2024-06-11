import { Component, EventEmitter, Output} from '@angular/core';
import { Productos } from '../../interfaces/productos-interface';


@Component({
  selector: 'app-agregar-prod',
  templateUrl: './agregar-prod.component.html',
  styleUrl: './agregar-prod.component.css'
})
export class AgregarProdComponent {
  @Output()
  public nuevoProduct: EventEmitter<Productos> = new EventEmitter();

  public productoSopa: Productos = {
    nombre: 'Sopa',
    descripcion: '350gr',
    precio: 12,
  }
  agregarProducto(): void {
    if (this.productoSopa.nombre == '' || this.productoSopa.descripcion === '' || this.productoSopa.precio === 0) {
      alert('Todos los campos son obligatorios');
      return;

    }

    this.nuevoProduct.emit(this.productoSopa);
    this.productoSopa = {
     nombre: '',
       descripcion: '',
       precio: 0,
     }
  }
}
