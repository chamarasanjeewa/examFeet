import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationService} from '../services/validationService';
import { SharedService } from './sharedService';
import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { ControlMessagesComponent } from './control-messages.component'

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent,ControlMessagesComponent],
  exports: [ToolbarComponent, 
  NavbarComponent,
  ControlMessagesComponent,
  CommonModule, 
  FormsModule, 
  RouterModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService]
    };
  }
}
