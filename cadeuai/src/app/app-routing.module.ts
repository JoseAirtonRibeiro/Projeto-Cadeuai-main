import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'selecionar-mapa',
    pathMatch: 'full'
  },
  {
    path: 'database',
    loadChildren: () => import('./pages/database/database.module').then( m => m.DatabasePageModule)
  },
  {
    path: 'configu',
    loadChildren: () => import('./pages/configu/configu.module').then( m => m.ConfiguPageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./pages/contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'notificacao',
    loadChildren: () => import('./pages/notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
  },
  {
    path: 'entradas-map',
    loadChildren: () => import('./pages/entradas-map/entradas-map.module').then( m => m.EntradasMapPageModule)
  },
  {
    path: 'selecionar-mapa',
    loadChildren: () => import('./pages/selecionar-mapa/selecionar-mapa.module').then( m => m.SelecionarMapaPageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./pages/suporte/suporte.module').then( m => m.SuportePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
