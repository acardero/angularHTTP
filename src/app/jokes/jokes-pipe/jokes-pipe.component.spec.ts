import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesPipeComponent } from './jokes-pipe.component';

describe('JokesPipeComponent', () => {
  let component: JokesPipeComponent;
  let fixture: ComponentFixture<JokesPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
