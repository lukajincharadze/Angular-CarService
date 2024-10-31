import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseLogo5Component } from './collapse-logo5.component';

describe('CollapseLogo5Component', () => {
  let component: CollapseLogo5Component;
  let fixture: ComponentFixture<CollapseLogo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseLogo5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseLogo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
