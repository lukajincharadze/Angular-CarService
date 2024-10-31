import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseLogo6Component } from './collapse-logo6.component';

describe('CollapseLogo6Component', () => {
  let component: CollapseLogo6Component;
  let fixture: ComponentFixture<CollapseLogo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseLogo6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseLogo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
