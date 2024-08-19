import { Component, OnInit } from '@angular/core';
import { transactionsData } from 'src/app/data/Transactions.data';
import { Transactions } from 'src/app/models/home-models/Transactions.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  allTransactions: Transactions[] = [];
  filteredTransactions: any[] = [];
  segmentValue = 'in';

  constructor() {}

  ngOnInit() {
    this.allTransactions = transactionsData;
    this.filterTransactions();
  }

  filterTransactions() {
    if (this.segmentValue === 'in') {
      this.filteredTransactions = this.allTransactions.filter(
        (item) => item.amount >= 0
      );
    } else {
      this.allTransactions.filter((item) => item.amount <= 0);
    }
  }
  segmentChanged(ev: CustomEvent) {
    this.segmentValue = ev.detail.value;
    this.filterTransactions();
  }
}
