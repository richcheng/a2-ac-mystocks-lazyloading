import { NgModule, ModuleWithProviders, Injector} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';

// import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    // ToolbarComponent, 
    NavbarComponent
  ],
  exports: [
    // ToolbarComponent, 
    NavbarComponent,
    CommonModule, 
    FormsModule, 
    RouterModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
      ,providers:[AuthService]
    };
  }
}
