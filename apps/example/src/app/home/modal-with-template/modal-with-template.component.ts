import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'example-modal-with-template',
  templateUrl: './modal-with-template.component.html',
})
export class ModalWithTemplateComponent {
  modalOpen = false;

  constructor(public routeOutlet: IonRouterOutlet) {}
}
