import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDashboardSharedUtilComponent } from './api-dashboard-shared-util.component';

describe('ApiDashboardSharedUtilComponent', () => {
  let component: ApiDashboardSharedUtilComponent;
  let fixture: ComponentFixture<ApiDashboardSharedUtilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiDashboardSharedUtilComponent]
    });
    fixture = TestBed.createComponent(ApiDashboardSharedUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
