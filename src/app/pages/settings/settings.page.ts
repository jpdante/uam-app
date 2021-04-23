import { Component, OnInit } from '@angular/core';
import { CharactersPageModule } from '../characters/characters.module';
import { CharactersPage } from '../characters/characters.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  themeToggle(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    }else{
      document.body.setAttribute('color-theme','light')
    }
  }

}
