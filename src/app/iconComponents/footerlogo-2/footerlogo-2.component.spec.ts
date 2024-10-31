import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerlogo2Component } from './footerlogo-2.component';

describe('Footerlogo2Component', () => {
  let component: Footerlogo2Component;
  let fixture: ComponentFixture<Footerlogo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerlogo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerlogo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
