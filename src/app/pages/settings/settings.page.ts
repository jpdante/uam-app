import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  public isDark: boolean;

  constructor(public storageService: StorageService, private router: Router) {}

  async ionViewWillEnter() {
    this.isDark = (await this.storageService.get('isDark')) === '1';
  }

  themeToggle(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
      this.storageService.set('isDark', '1');
    } else {
      document.body.setAttribute('color-theme', 'light');
      this.storageService.set('isDark', '0');
    }
  }

  async resetBtn() {
    await this.storageService.set('characters', null);
    this.router.navigate(['/characters']);
  }
}
