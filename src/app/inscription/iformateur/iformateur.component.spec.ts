import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IformateurComponent } from './iformateur.component';

describe('IformateurComponent', () => {
  let component: IformateurComponent;
  let fixture: ComponentFixture<IformateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IformateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
