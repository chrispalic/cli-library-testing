import { Component } from '@angular/core';

import { MyFirstLibraryService, MyFirstLibraryComponent } from 'my-first-library';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: MyFirstLibraryService) {
  }
  title = 'library-test';
}
