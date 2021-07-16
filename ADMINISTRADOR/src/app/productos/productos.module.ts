import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutes } from './productos.routing';
import { RouterModule } from '@angular/router';
import { ProductosPanelComponent } from './productos-panel/productos-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductosPanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductosRoutes),
    NgbModule,
    FormsModule

  ]
})
export class ProductosModule { }
