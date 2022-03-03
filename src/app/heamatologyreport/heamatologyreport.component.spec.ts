import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeamatologyreportComponent } from './heamatologyreport.component';

describe('HeamatologyreportComponent', () => {
  let component: HeamatologyreportComponent;
  let fixture: ComponentFixture<HeamatologyreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeamatologyreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeamatologyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
