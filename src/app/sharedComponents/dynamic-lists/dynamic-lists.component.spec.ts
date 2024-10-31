import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListsComponent } from './dynamic-lists.component';

describe('DynamicListsComponent', () => {
  let component: DynamicListsComponent;
  let fixture: ComponentFixture<DynamicListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
