import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/cards-models/Card.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  cards: Card[] = [];

  constructor() {}

  ngOnInit() {
    this.cards = [
      {
        companyName: 'mastercard',
        cardNo: '1234 5678 9101 1121',
        cardHolder: 'John Doe',
        expDate: '12/25',
      },
      {
        companyName: 'visa',
        cardNo: '4321 8765 1091 2111',
        cardHolder: 'Jane Smith',
        expDate: '08/24',
      },
      {
        companyName: 'american-express',
        cardNo: '5678 1234 9101 1121',
        cardHolder: 'Emily Johnson',
        expDate: '05/23',
      },
      {
        companyName: 'discover',
        cardNo: '8765 4321 1091 2111',
        cardHolder: 'Michael Brown',
        expDate: '09/26',
      },
      {
        companyName: 'diners-club',
        cardNo: '9101 1234 5678 1121',
        cardHolder: 'Sarah Wilson',
        expDate: '01/27',
      },
    ];
  }
}
