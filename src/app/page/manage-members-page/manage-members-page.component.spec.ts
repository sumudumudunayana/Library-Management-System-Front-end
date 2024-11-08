import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMembersPageComponent } from './manage-members-page.component';

describe('ManageMembersPageComponent', () => {
  let component: ManageMembersPageComponent;
  let fixture: ComponentFixture<ManageMembersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMembersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMembersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
