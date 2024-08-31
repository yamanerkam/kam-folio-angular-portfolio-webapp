import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulLinksComponent } from './useful-links.component';

describe('UsefulLinksComponent', () => {
  let component: UsefulLinksComponent;
  let fixture: ComponentFixture<UsefulLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsefulLinksComponent]
    });
    fixture = TestBed.createComponent(UsefulLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
