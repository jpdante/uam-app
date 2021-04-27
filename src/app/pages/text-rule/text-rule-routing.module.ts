import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextRulePage } from './text-rule.page';

const routes: Routes = [
  {
    path: '',
    component: TextRulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextRulePageRoutingModule {}
