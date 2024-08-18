import { Component } from '@angular/core';
import { Accounts } from 'src/app/models/Accounts.model';
import { Features } from 'src/app/models/Features.model';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  accounts: Accounts[] = [
    { id: 1, acc_no: 50020, balance: '2000' },
    { id: 2, acc_no: 50021, balance: '5000' },
    { id: 3, acc_no: 50022, balance: '1000' },
  ];

  features: Features[] = [
    { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
    { id: 2, color: 'white', icon: 'send', name: 'Request' },
    { id: 3, color: 'sucess', icon: 'add-circle', name: 'Top-up' },
    { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
    { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
  ];

  constructor() {}
}
