import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalModule } from 'ngx-ionic-extended';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import {
  ModalTestComponent,
  ModalWithComponentComponent,
} from './modal-with-component/modal-with-component.component';
import { ModalWithTemplateComponent } from './modal-with-template/modal-with-template.component';

@NgModule({
  imports: [CommonModule, IonicModule, ModalModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    ModalTestComponent,
    ModalWithComponentComponent,
    ModalWithTemplateComponent,
  ],
})
export class HomePageModule {}
