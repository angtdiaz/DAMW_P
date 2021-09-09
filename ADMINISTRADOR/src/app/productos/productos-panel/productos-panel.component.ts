import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from '../../services/request.service';
import Swal from 'sweetalert2';

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
    cantidad: 0,
    precio: 0.0,
    status: true,
    edit: false
  }

  constructor(private requestServ: RequestService, private modalService: NgbModal) { }

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
  open(content, producto = null) {
    if (producto) {
      this.producto.id = producto.id;
      this.producto.nombre = producto.nombre;
      this.producto.descripcion = producto.descripcion;
      this.producto.cantidad = producto.cantidad;
      this.producto.precio = producto.precio;
      this.producto.status = producto.status;
      this.producto.edit = true
    } else {
      this.producto.id = 0;
      this.producto.nombre = "";
      this.producto.descripcion = "";
      this.producto.cantidad = 0;
      this.producto.precio = 0.0;
      this.producto.status = true;
      this.producto.edit = false;
    }
    console.log(this.producto)

    this.modalService.open(content);
  }
  async gestion() {
    let response: any;
    if (this.producto.edit) {
      response = await this.requestServ.editProducto(this.producto.id, this.producto);
      console.log(response)
    } else {
      response = await this.requestServ.createProducto(this.producto);
    }

    if (response) {
      this.modalService.dismissAll();

      this.getProductos();
    }
  }
  async deleteTecnico(id: any) {
    Swal.fire({
      title: '¿Seguro que desea eliminar este registro?',
      text: 'Esta acción no se puede reversar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#343a40',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {
        const response = await this.requestServ.deleteProducto(id);
        if (response) {
          this.getProductos();
        }
      }
    });
  }


}
