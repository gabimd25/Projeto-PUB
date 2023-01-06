import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventPubComponent } from './event-pub.component';


describe('EventPubComponent', () => {
  let component: EventPubComponent;
  let fixture: ComponentFixture<EventPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
