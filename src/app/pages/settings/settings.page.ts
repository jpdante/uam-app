import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public isDark: boolean;

  constructor() { }

  ngOnInit() {
    this.isDark = localStorage.getItem("isDark") === "1";
  }

  themeToggle(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
      localStorage.setItem("isDark", "1");
    }else{
      document.body.setAttribute('color-theme','light')
      localStorage.setItem("isDark", "0");
    }
  }

}
