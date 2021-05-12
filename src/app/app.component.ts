import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public storageService: StorageService) {
    if(localStorage.getItem("isDark") === "1"){
      document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
    }
  }

  async ngOnInit() {
    await this.storageService.init();
  }
}
