import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FafnirRannComponent } from './fafnir-rann.component';

describe('FafnirRannComponent', () => {
  let component: FafnirRannComponent;
  let fixture: ComponentFixture<FafnirRannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FafnirRannComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FafnirRannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
