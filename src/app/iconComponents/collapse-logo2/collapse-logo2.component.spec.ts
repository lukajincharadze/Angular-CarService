import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseLogo2Component } from './collapse-logo2.component';

describe('CollapseLogo2Component', () => {
  let component: CollapseLogo2Component;
  let fixture: ComponentFixture<CollapseLogo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseLogo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseLogo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
