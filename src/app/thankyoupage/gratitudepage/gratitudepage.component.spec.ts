import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudepageComponent } from './gratitudepage.component';

describe('GratitudepageComponent', () => {
  let component: GratitudepageComponent;
  let fixture: ComponentFixture<GratitudepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratitudepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GratitudepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
