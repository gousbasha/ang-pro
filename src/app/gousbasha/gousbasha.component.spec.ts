import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GousbashaComponent } from './gousbasha.component';

describe('GousbashaComponent', () => {
  let component: GousbashaComponent;
  let fixture: ComponentFixture<GousbashaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GousbashaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GousbashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
