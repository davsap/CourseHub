import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IetudiantComponent } from './ietudiant.component';

describe('IetudiantComponent', () => {
  let component: IetudiantComponent;
  let fixture: ComponentFixture<IetudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IetudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
