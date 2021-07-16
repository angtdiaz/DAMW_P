import { Routes } from '@angular/router';

import { Dashboard2Component } from './dashboard2/dashboard2.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [

      {
        path: '',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard'
        }
      },

    ]
  }
];
