import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstLibraryModule } from 'my-first-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyFirstLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
