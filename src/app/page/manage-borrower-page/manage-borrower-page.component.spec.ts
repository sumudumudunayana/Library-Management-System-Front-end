import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBorrowerPageComponent } from './manage-borrower-page.component';

describe('ManageBorrowerPageComponent', () => {
  let component: ManageBorrowerPageComponent;
  let fixture: ComponentFixture<ManageBorrowerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBorrowerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBorrowerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
