import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexisPoluxComponent } from './alexis-polux.component';

describe('AlexisPoluxComponent', () => {
  let component: AlexisPoluxComponent;
  let fixture: ComponentFixture<AlexisPoluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlexisPoluxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlexisPoluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
