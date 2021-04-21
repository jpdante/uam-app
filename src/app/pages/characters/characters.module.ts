import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomBarComponent } from './../../components/bottom-bar/bottom-bar.component';

import { CharactersPageRoutingModule } from './characters-routing.module';

import { CharactersPage } from './characters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule
  ],
  declarations: [CharactersPage, BottomBarComponent]
})
export class CharactersPageModule {}
