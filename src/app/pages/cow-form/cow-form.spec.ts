import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowForm } from './cow-form';

describe('CowForm', () => {
  let component: CowForm;
  let fixture: ComponentFixture<CowForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CowForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
