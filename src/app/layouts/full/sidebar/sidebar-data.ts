import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Início',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  },
  {
    navCap: 'Páginas - Ferramentas',
  },
  {
    displayName: 'Acessos - Clientes',
    iconName: 'list',
    route: '/acessos-clientes',
  },
  {
    displayName: 'Cursos de Capacitação',
    iconName: 'school',
    route: '/cursos-capacitacao',
  },
  {
    displayName: 'Contra - Senha',
    iconName: 'circle-key',
    route: '/contra-senha',
  },
  {
    navCap: 'Links Externos',
  },
  {
    displayName: 'Site JCA Soluções',
    iconName: 'briefcase-2',
    externalUrl: 'https://jca.vaiacelerar.com.br/',
    target: '_blank',
  },
  
   { 
    displayName: 'Webmail',
    iconName: 'Mail',
    externalUrl: 'https://webmailpro.uol.com.br/#',
    target: '_blank',
  },

  {
    displayName: 'Cálculo Exato',
    iconName: 'abacus',
    externalUrl: 'https://calculoexato.com.br/',
    target: '_blank',
  },
  {
    externalUrl: 'https://www.4devs.com.br/',
    displayName: '4Devs',
    iconName: 'circle-dashed-number-4', 
    target: '_blank',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Badge',
    iconName: 'archive',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'info-circle',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list-details',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'file-text',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'file-text-ai',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Forms',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'table',
    route: '/ui-components/tables',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'brand-dribbble',
    route: '/extra/sample-page',
  },
  {
    navCap: 'Forms',
  },  

  {
    navCap: 'Chart',
  },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
        iconName: 'point',
        route: '/authentication/login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
        iconName: 'point',
        route: '/authentication/register',
      },
    ],
  },
];
