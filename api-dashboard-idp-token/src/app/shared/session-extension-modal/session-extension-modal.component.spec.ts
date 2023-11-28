import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionExtensionModalComponent } from './session-extension-modal.component';

describe('SessionExtensionModalComponent', () => {
  let component: SessionExtensionModalComponent;
  let fixture: ComponentFixture<SessionExtensionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionExtensionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionExtensionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
