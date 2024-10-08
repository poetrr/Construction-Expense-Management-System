import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BricksComponent } from './bricks.component';

describe('BricksComponent', () => {
  let component: BricksComponent;
  let fixture: ComponentFixture<BricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BricksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
