import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Productos } from '../../interfaces/productos-interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  @Input()
  public productoList: Productos[] = [];

  @Output()
  public eliminarProducto: EventEmitter<number> = new EventEmitter<number>();

  onEliminarProducto(index: number): void {
    this.eliminarProducto.emit(index);
  }
}