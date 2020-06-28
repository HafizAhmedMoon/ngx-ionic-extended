import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithTemplateComponent } from './modal-with-template.component';

describe('ModalWithTemplateComponent', () => {
  let component: ModalWithTemplateComponent;
  let fixture: ComponentFixture<ModalWithTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWithTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWithTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
