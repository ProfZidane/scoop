import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComputerComponent } from './home-computer.component';

describe('HomeComputerComponent', () => {
  let component: HomeComputerComponent;
  let fixture: ComponentFixture<HomeComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
