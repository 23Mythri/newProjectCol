import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucometryreportComponent } from './glucometryreport.component';

describe('GlucometryreportComponent', () => {
  let component: GlucometryreportComponent;
  let fixture: ComponentFixture<GlucometryreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlucometryreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucometryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
