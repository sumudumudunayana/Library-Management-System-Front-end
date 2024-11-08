import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembersPageComponent } from './add-members-page.component';

describe('AddMembersPageComponent', () => {
  let component: AddMembersPageComponent;
  let fixture: ComponentFixture<AddMembersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMembersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMembersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
