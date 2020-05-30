import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';

  constructor() {
    let a = 4;
    for (let i = 0; i <= 10; i++) {
      a = a * i;
      console.log(a);

    }
  }
}
