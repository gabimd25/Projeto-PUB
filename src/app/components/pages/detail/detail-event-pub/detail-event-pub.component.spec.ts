import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEventPubComponent } from './detail-event-pub.component';

describe('DetailEventPubComponent', () => {
  let component: DetailEventPubComponent;
  let fixture: ComponentFixture<DetailEventPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEventPubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEventPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
