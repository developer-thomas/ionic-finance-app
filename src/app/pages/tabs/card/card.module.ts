import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';

import { CardPage } from './card.page';
import { register } from 'swiper/element';
register();
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CardPageRoutingModule],
  declarations: [CardPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardPageModule {}
