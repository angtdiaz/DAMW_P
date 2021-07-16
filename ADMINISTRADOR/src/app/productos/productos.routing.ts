import { Routes } from "@angular/router";
import { ProductosPanelComponent } from "./productos-panel/productos-panel.component";

export const ProductosRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProductosPanelComponent,
                data: {
                    title: 'Productos'
                }
            }
        ]
    }

]
