import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from 'src/app/services/users/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: TabsPage,
    children: [
      {
        path: 'home/:id',
        pathMatch: 'full',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'transactions/:id',
        loadChildren: () =>
          import('./transactions/transactions.module').then(
            (m) => m.TransactionsPageModule
          ),
      },
      {
        path: 'settings/:id',
        loadChildren: () =>
          import('./settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: 'card/:id',
        loadChildren: () =>
          import('./card/card.module').then((m) => m.CardPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
