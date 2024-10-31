import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseLogo4Component } from './collapse-logo4.component';

describe('CollapseLogo4Component', () => {
  let component: CollapseLogo4Component;
  let fixture: ComponentFixture<CollapseLogo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseLogo4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseLogo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
