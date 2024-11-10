import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBorrowerPageComponent } from './add-borrower-page.component';

describe('AddBorrowerPageComponent', () => {
  let component: AddBorrowerPageComponent;
  let fixture: ComponentFixture<AddBorrowerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBorrowerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBorrowerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
