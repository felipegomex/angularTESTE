export interface NavItem {
    displayName?: string;
    iconName?: string;
    route?: string;
    children?: NavItem[];
    navCap?: string;
    target?: string;
    externalUrl?: string; // Propriedade adicionada
  }