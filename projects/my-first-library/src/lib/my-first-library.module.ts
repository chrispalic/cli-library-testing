import { NgModule } from '@angular/core';
import { MyFirstLibraryComponent } from './my-first-library.component';

import { MaskedTextBoxModule, MaskedTextBoxComponent } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [MyFirstLibraryComponent],
  imports: [
    MaskedTextBoxModule
  ],
  exports: [MyFirstLibraryComponent, MaskedTextBoxModule]
})
export class MyFirstLibraryModule { }
