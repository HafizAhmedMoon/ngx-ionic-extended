import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalWithComponentComponent } from './modal-with-component.component';

describe('ModalWithComponentComponent', () => {
  let component: ModalWithComponentComponent;
  let fixture: ComponentFixture<ModalWithComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalWithComponentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWithComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
