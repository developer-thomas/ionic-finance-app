import { Component } from '@angular/core';
import { accountsData } from 'src/app/data/Accounts.data';
import { transactionsData } from 'src/app/data/Transactions.data';
import { Accounts } from 'src/app/models/home-models/Accounts.model';
import { Features } from 'src/app/models/home-models/Features.model';
import { Transactions } from 'src/app/models/home-models/Transactions.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  accounts: Accounts[] = accountsData;
  transactions: Transactions[] = transactionsData;

  features: Features[] = [
    { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
    { id: 2, color: 'white', icon: 'send', name: 'Request' },
    { id: 3, color: 'sucess', icon: 'add-circle', name: 'Top-up' },
    { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
    { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
  ];

  constructor() {}
}
