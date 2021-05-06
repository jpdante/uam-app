import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourCharacterPageRoutingModule } from './your-character-routing.module';

import { YourCharacterPage } from './your-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourCharacterPageRoutingModule
  ],
  declarations: [YourCharacterPage]
})
export class YourCharacterPageModule {}
