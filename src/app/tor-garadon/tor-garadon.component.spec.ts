import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorGaradonComponent } from './tor-garadon.component';

describe('TorGaradonComponent', () => {
  let component: TorGaradonComponent;
  let fixture: ComponentFixture<TorGaradonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorGaradonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorGaradonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
