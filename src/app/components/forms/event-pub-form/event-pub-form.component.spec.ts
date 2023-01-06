import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPubFormComponent } from './event-pub-form.component';

describe('EventPubFormComponent', () => {
  let component: EventPubFormComponent;
  let fixture: ComponentFixture<EventPubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPubFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
