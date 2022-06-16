import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnexComponent } from './anex.component';

describe('AnexComponent', () => {
  let component: AnexComponent;
  let fixture: ComponentFixture<AnexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
