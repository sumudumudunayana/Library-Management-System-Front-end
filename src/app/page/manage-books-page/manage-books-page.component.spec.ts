import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBooksPageComponent } from './manage-books-page.component';

describe('ManageBooksPageComponent', () => {
  let component: ManageBooksPageComponent;
  let fixture: ComponentFixture<ManageBooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBooksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
