import { AfterViewInit, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
interface Accounts {
  id: number;
  acc_no: number;
  balance: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  accounts: Accounts[] = [
    { id: 1, acc_no: 50020, balance: '2000' },
    { id: 2, acc_no: 50021, balance: '5000' },
    { id: 3, acc_no: 50022, balance: '1000' },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    console.log('teste');
  }
}
