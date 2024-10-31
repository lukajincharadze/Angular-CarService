import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerlogo3Component } from './footerlogo-3.component';

describe('Footerlogo3Component', () => {
  let component: Footerlogo3Component;
  let fixture: ComponentFixture<Footerlogo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerlogo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerlogo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
