import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

interface Atrib {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
interface Character {
  image: string;
  name: string;
  lifePoints: number;
  armorClass: number;
  class: string;
  level: number;
  race: string;
  gender: string;
  story: string;
  atrib: Atrib;
  languagesAndProficiencies: string;
  itensList: string;
  spellsList: string;
  xp: number;
  alignment: string;
  speed: number;
  initiative: number;
}

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.page.html',
  styleUrls: ['./create-character.page.scss'],
})
export class CreateCharacterPage implements OnInit {
  public defaultImg = 'https://i.imgur.com/svtbHpw.jpg';

  constructor(
    public storageService: StorageService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
  }

  public defaultAtribs: Atrib = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  };

  public newCharacter: Character = {
    image: this.defaultImg,
    name: '',
    lifePoints: 10,
    armorClass: 10,
    class: '',
    level: 1,
    race: '',
    gender: '',
    languagesAndProficiencies: 'Put your description here',
    story: 'Put your description here',
    itensList: 'Put your description here',
    spellsList: 'Put your description here',
    atrib: this.defaultAtribs,
    xp: 0,
    alignment: '',
    speed: 9,
    initiative: 10,
  };

  public async updateImage(e: any) {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
      quality: 100,
      
    });
    console.log(capturedPhoto);
    if (capturedPhoto.dataUrl) {
      this.newCharacter.image = capturedPhoto.dataUrl;
    } else {
      this.newCharacter.image = this.defaultImg;
    }
  }

  public resetImage() {
    this.newCharacter.image = this.defaultImg;
  }

  public async submitCharacter() {
    const characters: Character[] | null = await this.storageService.get(
      'characters'
    );
    characters.push(this.newCharacter);
    if (
      this.newCharacter.name == '' ||
      this.newCharacter.gender == '' ||
      this.newCharacter.race == '' ||
      this.newCharacter.alignment == '' ||
      this.newCharacter.class == ''
    ) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        message: 'You need to fill all the spaces.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          }
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Do you want to submit you character?',
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
            text: 'Submit',
            handler: async() => {
              await this.storageService.set('characters', characters);
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
}
