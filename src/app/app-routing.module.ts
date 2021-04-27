import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'create-character',
    loadChildren: () => import('./pages/create-character/create-character.module').then( m => m.CreateCharacterPageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./pages/rules/rules.module').then( m => m.RulesPageModule)
  },
  {
    path: 'your-character',
    loadChildren: () => import('./pages/your-character/your-character.module').then( m => m.YourCharacterPageModule)
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'element',
    loadChildren: () => import('./pages/element/element.module').then( m => m.ElementPageModule)
  },
  {
    path: 'text-rule',
    loadChildren: () => import('./pages/text-rule/text-rule.module').then( m => m.TextRulePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
