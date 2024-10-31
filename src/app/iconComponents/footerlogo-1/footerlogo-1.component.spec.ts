import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerlogo1Component } from './footerlogo-1.component';

describe('Footerlogo1Component', () => {
  let component: Footerlogo1Component;
  let fixture: ComponentFixture<Footerlogo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerlogo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerlogo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
