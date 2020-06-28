import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'example-modal-with-component',
  templateUrl: './modal-with-component.component.html',
})
export class ModalWithComponentComponent {
  modalOpen = false;
  modalComponent = ModalTestComponent;
}

@Component({
  template: `<ion-header>
      <ion-toolbar>
        <ion-title>Modal with component</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="modalController.dismiss()">
            <ion-icon slot="icon-only" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <div class="ion-padding ion-text-center">
      <ion-text>Modal content</ion-text>
    </div>`,
})
export class ModalTestComponent {
  constructor(public modalController: ModalController) {}
}
