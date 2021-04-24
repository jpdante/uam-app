import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    if(localStorage.getItem("isDark") === "1"){
      document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
    }
  }
}
