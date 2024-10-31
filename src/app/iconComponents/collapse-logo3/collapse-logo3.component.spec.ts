import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseLogo3Component } from './collapse-logo3.component';

describe('CollapseLogo3Component', () => {
  let component: CollapseLogo3Component;
  let fixture: ComponentFixture<CollapseLogo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseLogo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseLogo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
