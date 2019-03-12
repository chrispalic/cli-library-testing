import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-first-library',
  // template: `
  //   <p>
  //     my-first-library works!
  //   </p>
  // `,
  templateUrl: './my-first-library.component.html',
  styles: []
})
export class MyFirstLibraryComponent implements OnInit {
  public value = '359884123321';
  public mask = '(999) 000-00-00-00';
  constructor() { }

  ngOnInit() {
  }

}
