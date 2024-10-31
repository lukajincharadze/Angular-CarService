import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3LogoComponent } from './section3-logo.component';

describe('Section3LogoComponent', () => {
  let component: Section3LogoComponent;
  let fixture: ComponentFixture<Section3LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section3LogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section3LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
