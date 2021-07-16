import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-productos-panel',
  templateUrl: './productos-panel.component.html',
  styleUrls: ['./productos-panel.component.css']
})
export class ProductosPanelComponent implements OnInit {
  variable: string;
  productos = [];
  producto: any = {}

  constructor(private requestServ: RequestService) { }

  ngOnInit(): void {
    this.getProductos();
  }
  getProductos() {
    this.productos = [
      {
        codigo: 'AAA',
        nombre: 'prueba'
      },
      {
        codigo: 'BBB',
        nombre: 'prueba2'
      },
      {
        codigo: 'CCC',
        nombre: 'prueba3'
      },
    ]
  }
  notificar() {
    this.requestServ.showAlert(`${this.producto.nombre} con precio de ${this.producto.precio}`, 'warning');
  }



}
