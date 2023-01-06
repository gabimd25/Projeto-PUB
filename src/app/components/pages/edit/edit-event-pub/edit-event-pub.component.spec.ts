import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventPubComponent } from './edit-event-pub.component';

describe('EditEventPubComponent', () => {
  let component: EditEventPubComponent;
  let fixture: ComponentFixture<EditEventPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEventPubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEventPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
