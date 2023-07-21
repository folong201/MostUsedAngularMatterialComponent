import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BontonsheetComponent } from './bontonsheet.component';

describe('BontonsheetComponent', () => {
  let component: BontonsheetComponent;
  let fixture: ComponentFixture<BontonsheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BontonsheetComponent]
    });
    fixture = TestBed.createComponent(BontonsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
