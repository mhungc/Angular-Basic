import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>{{title}}</h1>
  <app-medicines></app-medicines>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mena-vademecum';
}
