import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    label: '',
    labelClass: 'label label-rouded label-themecolor',
    extralink: false,
    submenu: []
  },

  {
    path: '/productos',
    title: 'Productos',
    icon: 'fa fa-shopping-bag',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/',
    title: 'Promociones',
    icon: 'mdi mdi-bullseye',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },

  ,

];
