import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularCreateComponent } from './formular-create.component';

describe('FormularCreateComponent', () => {
  let component: FormularCreateComponent;
  let fixture: ComponentFixture<FormularCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
