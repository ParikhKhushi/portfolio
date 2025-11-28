import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavbarComponent } from './sidenavbar.component';

describe('SidenavbarComponent', () => {
  let component: SidenavbarComponent;
  let fixture: ComponentFixture<SidenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
