import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>{{title}}</h1>
  <div>My first Component</div>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mena-vademecum';
}
