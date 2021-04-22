import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomBarComponent } from './../../components/bottom-bar/bottom-bar.component';

import { RulesPageRoutingModule } from './rules-routing.module';

import { RulesPage } from './rules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RulesPageRoutingModule
  ],
  declarations: [RulesPage, BottomBarComponent]
})
export class RulesPageModule {}
