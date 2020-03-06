import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonReactFormComponent } from './person-react-form.component';

describe('PersonReactFormComponent', () => {
  let component: PersonReactFormComponent;
  let fixture: ComponentFixture<PersonReactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonReactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
