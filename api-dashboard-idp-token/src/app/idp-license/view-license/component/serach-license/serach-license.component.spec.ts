import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachLicenseComponent } from './serach-license.component';

describe('SerachLicenseComponent', () => {
  let component: SerachLicenseComponent;
  let fixture: ComponentFixture<SerachLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerachLicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerachLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
