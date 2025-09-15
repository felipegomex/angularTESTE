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
    displayName: 'Chamados',
    iconName: 'clipboard-list',
    route: '/chamados',
  },

  {
    displayName: 'Monitoramento',
    iconName: 'activity',
    // route removed: monitoramento-importacoes
  },

  {
    navCap: 'Páginas - Ferramentas',
  },

  {
    displayName: 'Acessos - Clientes',
    iconName: 'logic-or',
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
    displayName: 'Formulário - Programação',
    iconName: 'list-details',
    route: '/formulario-programacao',
  },

  {
    navCap: 'Documentações',
  },

  {
    displayName: 'Layouts',
    iconName: 'file-check',
    route: '/documentacao/documentacao-layout',
  },

  {
    displayName: 'Apis',
    iconName: 'plug-connected',
    route: '/documentacao/documentacao-api',
  },

  {
    displayName: 'WebService',
    iconName: 'plug',
    route: '/documentacao/documentacao-webservice',
  },

  {
    displayName: 'SQL',
    iconName: 'sql',
    route: '/documentacao/documentacao-sql',
  },

  {
    displayName: 'Manuais - Actyon',
    iconName: 'brand-google-drive',
    route: '/documentacao/documentacao-manuais',
  },
  
  {
    navCap: 'Links Externos',
  },

  {
    displayName: 'Chamados - JCA Externo',
    iconName: 'link',
    externalUrl: 'http://187.91.168.50:88/Conta/Login?ReturnUrl=%2f',
    target: '_blank',
  },

{
    displayName: 'Chamados - JCA Interno',
    iconName: 'link',
    externalUrl: 'http://192.168.2.2:88/Conta/Login?ReturnUrl=%2f',
    target: '_blank',
  },

  {
    displayName: 'Site JCA Soluções',
    iconName: 'briefcase-2',
    externalUrl: 'http://jca.vaiacelerar.com.br/',
    target: '_blank',
  },
  
  { 
    displayName: 'Webmail',
    iconName: 'Mail',
    externalUrl: 'https://email.uolhost.com.br/',
    target: '_blank',
  },

  {
    displayName: 'Cálculo Exato',
    iconName: 'abacus',
    externalUrl: 'https://calculoexato.com.br/',
    target: '_blank',
  },

  {
    displayName: '4Devs',
    iconName: 'circle-dashed-number-4', 
    externalUrl: 'https://www.4devs.com.br/',
    target: '_blank',
  },

  {
    displayName: 'DeepSeek',
    iconName: 'brand-openai', 
    externalUrl: 'https://chat.deepseek.com/',
    target: '_blank',
  },

  {
    displayName: 'Discord',
    iconName: 'brand-discord', 
    externalUrl: 'https://chat.deepseek.com/',
    target: '_blank',
  },

  {
    navCap: 'Social',
  },

  {
    displayName: 'Meu Perfil',
    iconName: 'user-edit',
    route: '/social/meu-perfil',
  },

  {
    displayName: 'Social - JCA',
    iconName: 'users-group',
    route: '/social/membros-jca',
    children: [
      {
        displayName: 'Equipe',
        iconName: 'users',
        route: '/social/equipe',
      },
      {
        displayName: 'Setores',
        iconName: 'align-box-left-stretch',
        route: '/social/setores',
      },
    ],
      },
      {
        displayName: 'Sobre a JCA',
        iconName: 'info-square-rounded',
        route: '/jca/sobre-jca',
      },
      {
        displayName: 'Produtos JCA',
        iconName: 'shopping-cart',
        route: '/jca/produtos-jca',
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

];
