import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextRulePageRoutingModule } from './text-rule-routing.module';

import { TextRulePage } from './text-rule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextRulePageRoutingModule
  ],
  declarations: [TextRulePage]
})
export class TextRulePageModule {}
