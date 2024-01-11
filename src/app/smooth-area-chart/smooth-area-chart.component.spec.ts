import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothAreaChartComponent } from './smooth-area-chart.component';

describe('SmoothAreaChartComponent', () => {
  let component: SmoothAreaChartComponent;
  let fixture: ComponentFixture<SmoothAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmoothAreaChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmoothAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
