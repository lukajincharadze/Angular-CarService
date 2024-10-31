import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrSvgComponent } from './arr-svg.component';

describe('ArrSvgComponent', () => {
  let component: ArrSvgComponent;
  let fixture: ComponentFixture<ArrSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
