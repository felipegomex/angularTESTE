import { Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TablerIconsModule } from 'angular-tabler-icons';
import { navItems } from '../sidebar/sidebar-data'; // Importe os navItems

@Component({
    selector: 'app-topstrip',
    imports: [TablerIconsModule, MatButtonModule, MatMenuModule],
    templateUrl: './topstrip.component.html',
})
export class AppTopstripComponent {
    constructor() { }
@Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  
  // Adicione a propriedade navItems
  navItems = navItems;

  ngOnInit(): void {}
}
