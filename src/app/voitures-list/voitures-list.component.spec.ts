import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituresListComponent } from './voitures-list.component';

describe('VoituresListComponent', () => {
  let component: VoituresListComponent;
  let fixture: ComponentFixture<VoituresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoituresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoituresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
