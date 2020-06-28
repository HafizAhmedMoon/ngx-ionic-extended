import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOptions, OverlayEventDetail } from '@ionic/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { createOverlay } from '../utils/create-overlay';

@Component({
  selector: 'ngx-ion-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements AfterContentInit, OnDestroy {
  @Input() component: ModalOptions['component'];
  @Input() componentProps: ModalOptions['componentProps'];
  @Input() presentingElement: ModalOptions['presentingElement'];
  @Input() showBackdrop: ModalOptions['showBackdrop'];
  @Input() backdropDismiss: ModalOptions['backdropDismiss'];
  @Input() cssClass: ModalOptions['cssClass'];
  @Input() delegate: ModalOptions['delegate'];
  @Input() animated: ModalOptions['animated'];
  @Input() swipeToClose: ModalOptions['swipeToClose'];
  @Input() mode: ModalOptions['mode'];
  @Input() keyboardClose: ModalOptions['keyboardClose'];
  @Input() id: ModalOptions['id'];
  @Input() enterAnimation: ModalOptions['enterAnimation'];
  @Input() leaveAnimation: ModalOptions['leaveAnimation'];

  @Output() willPresent = new EventEmitter<void>();
  @Output() didPresent = new EventEmitter<void>();
  @Output() willDismiss = new EventEmitter<OverlayEventDetail>();
  @Output() didDismiss = new EventEmitter<OverlayEventDetail>();

  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  private contentInitSubject = new Subject<void>();
  private destroySubject = new Subject<void>();

  constructor(modalController: ModalController) {
    this.contentInitSubject
      .pipe(
        switchMap(() => {
          if (this.templateRef) {
            this.component = ModalTemplateComponent;
            this.componentProps = { template: this.templateRef };
          }
          return createOverlay(modalController, this.getModalOptions());
        }),
        tap((modal) => {
          modal.onDidDismiss().then((event) => this.didDismiss.emit(event));
          modal.onWillDismiss().then((event) => this.willDismiss.emit(event));

          this.willPresent.emit();
          modal.present().then(() => this.didPresent.emit());
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.contentInitSubject.next();
  }

  ngOnDestroy() {
    this.destroySubject.next();
  }

  private getModalOptions() {
    const {
      component,
      componentProps,
      presentingElement,
      showBackdrop,
      backdropDismiss,
      cssClass,
      delegate,
      animated,
      swipeToClose,
      mode,
      keyboardClose,
      id,
      enterAnimation,
      leaveAnimation,
    } = this;

    return {
      component,
      componentProps,
      presentingElement,
      showBackdrop,
      backdropDismiss,
      cssClass,
      delegate,
      animated,
      swipeToClose,
      mode,
      keyboardClose,
      id,
      enterAnimation,
      leaveAnimation,
    };
  }
}

@Component({
  template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
})
export class ModalTemplateComponent {
  @Input() template: TemplateRef<any>;
}
