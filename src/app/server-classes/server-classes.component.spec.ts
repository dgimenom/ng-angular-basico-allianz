import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerClassesComponent } from './server-classes.component';

describe('ServerClassesComponent', () => {
  let component: ServerClassesComponent;
  let fixture: ComponentFixture<ServerClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
