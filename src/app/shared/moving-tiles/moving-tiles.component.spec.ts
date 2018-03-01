import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingTilesComponent } from './moving-tiles.component';

describe('MovingTilesComponent', () => {
  let component: MovingTilesComponent;
  let fixture: ComponentFixture<MovingTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
