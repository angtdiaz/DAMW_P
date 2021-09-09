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
  producto = {
    id: 0,
    nombre: "",
    descripcion: "",
    pass: "",
    edit: false
  }

  constructor(private requestServ: RequestService) { }

  ngOnInit(): void {
    this.getProductos();
  }
  async getProductos() {
    const response = await this.requestServ.getProductos();
    console.log(response);
    if (response[0]) {
      this.productos = response[1];
    }
  }




}
