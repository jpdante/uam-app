import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  public isDark: boolean;

  constructor(
    public storageService: StorageService,
    private router: Router,
    public alertController: AlertController
  ) {}

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
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ALERT!',
      message: 'Do you want to delete all characters?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: async() => {
            await this.storageService.set('characters', []);
            this.router.navigate(['/characters']);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    }

 }
