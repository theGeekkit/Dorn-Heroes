import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigismundComponent } from './sigismund.component';

describe('SigismundComponent', () => {
  let component: SigismundComponent;
  let fixture: ComponentFixture<SigismundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigismundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigismundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
