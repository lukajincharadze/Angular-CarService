import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseLogo1Component } from './collapse-logo1.component';

describe('CollapseLogo1Component', () => {
  let component: CollapseLogo1Component;
  let fixture: ComponentFixture<CollapseLogo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseLogo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseLogo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
