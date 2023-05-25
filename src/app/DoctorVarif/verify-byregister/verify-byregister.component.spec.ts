import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyByregisterComponent } from './verify-byregister.component';

describe('VerifyByregisterComponent', () => {
  let component: VerifyByregisterComponent;
  let fixture: ComponentFixture<VerifyByregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyByregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyByregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
