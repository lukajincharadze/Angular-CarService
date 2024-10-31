import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignifyLogoComponent } from './signify-logo.component';

describe('SignifyLogoComponent', () => {
  let component: SignifyLogoComponent;
  let fixture: ComponentFixture<SignifyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignifyLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignifyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
