import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoogleComponent } from './buttontoogle.component';

describe('ButtontoogleComponent', () => {
  let component: ButtontoogleComponent;
  let fixture: ComponentFixture<ButtontoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoogleComponent]
    });
    fixture = TestBed.createComponent(ButtontoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
