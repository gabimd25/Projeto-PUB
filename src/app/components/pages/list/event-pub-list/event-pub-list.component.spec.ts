import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPubListComponent } from './event-pub-list.component';

describe('EventPubListComponent', () => {
  let component: EventPubListComponent;
  let fixture: ComponentFixture<EventPubListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPubListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
