import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecomponetComponent } from './updatecomponet.component';

describe('UpdatecomponetComponent', () => {
  let component: UpdatecomponetComponent;
  let fixture: ComponentFixture<UpdatecomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecomponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
