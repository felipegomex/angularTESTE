import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  imports: [],
  template: `
    <a href="/dashboard" class="logodark">
      <img
        src="./assets/images/logos/LOGO-JCA-2.png"
        class="align-middle m-2"
        alt="logo"
         style="width: 60px; height: 60px;"
      />
    </a>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();
  constructor(private settings: CoreService) {}
}
