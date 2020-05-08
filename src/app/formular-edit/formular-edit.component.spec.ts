import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularEditComponent } from './formular-edit.component';

describe('FormularEditComponent', () => {
  let component: FormularEditComponent;
  let fixture: ComponentFixture<FormularEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
