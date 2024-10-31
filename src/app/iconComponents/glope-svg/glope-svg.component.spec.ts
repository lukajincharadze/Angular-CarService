import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlopeSvgComponent } from './glope-svg.component';

describe('GlopeSvgComponent', () => {
  let component: GlopeSvgComponent;
  let fixture: ComponentFixture<GlopeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlopeSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlopeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
