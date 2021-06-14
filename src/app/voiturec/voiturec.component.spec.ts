import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiturecComponent } from './voiturec.component';

describe('VoiturecComponent', () => {
  let component: VoiturecComponent;
  let fixture: ComponentFixture<VoiturecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiturecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiturecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
