import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit{
  constructor(private storage: Storage){
    if(localStorage.getItem("isDark") === "1"){
      document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
    }
  }
  
  async ngOnInit() {
    await this.storage.create();
  }
}
