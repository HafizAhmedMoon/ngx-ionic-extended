import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalComponent, ModalTemplateComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent, ModalTemplateComponent],
  imports: [CommonModule, IonicModule],
  exports: [ModalComponent],
})
export class ModalModule {}
