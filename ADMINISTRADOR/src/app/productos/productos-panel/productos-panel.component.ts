import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

declare var jsPDF: any;
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
        codigo: 'A0',
        nombre: 'Pulsera de Oro Goldfield (estrella)',
        disponibilidad: '55 unidades'
      },
      {
        codigo: 'A1',
        nombre: 'Pulsera de Plata (luna)',
        disponibilidad: '40 unidades'
      },
      {
        codigo: 'A2',
        nombre: 'Pulsera de Oro (inicial)',
        disponibilidad: '20 unidades'
      },
      {
        codigo: 'B0',
        nombre: 'Cadena de Oro Goldfield (estrella)',
        disponibilidad: '100 unidades'
      },
      {
        codigo: 'B1',
        nombre: 'Cadena de Plata (luna)',
        disponibilidad: '56 unidades'
      },
      {
        codigo: 'B2',
        nombre: 'Cadena de Oro (inicial)',
        disponibilidad: '88 unidades'
      },
      {
        codigo: 'C0',
        nombre: 'Aretes de Oro Goldfield (estrella)',
        disponibilidad: '89 unidades'
      },
      {
        codigo: 'C1',
        nombre: 'Aretes de Plata (luna)',
        disponibilidad: '200 unidades'
      },
      {
        codigo: 'C2',
        nombre: 'Aretes de Oro (inicial)',
        disponibilidad: '150 unidades'
      },
    ]
  }
  notificar() {
    this.requestServ.showAlert(`${this.producto.nombre} con precio de ${this.producto.precio}`, 'warning');
  }
  downloadPDF() {

    let columns = ["ID", "Name", "Country"];
    let rows = [
      [1, "Shaw", "Tanzania"],
      [2, "Nelson", "Kazakhstan"],
      [3, "Garcia", "Madagascar"],
    ];
    console.log("hola")
    let doc = new jsPDF('l', 'pt');
    doc.autoTable(columns, rows); // typescript compile time error
    doc.save('table.pdf');
  }



}
