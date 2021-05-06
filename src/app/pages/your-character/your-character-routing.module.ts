import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourCharacterPage } from './your-character.page';

const routes: Routes = [
  {
    path: '',
    component: YourCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourCharacterPageRoutingModule {}
