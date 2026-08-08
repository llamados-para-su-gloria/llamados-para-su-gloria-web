import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonsPreview } from './sermons-preview';

describe('SermonsPreview', () => {
  let component: SermonsPreview;
  let fixture: ComponentFixture<SermonsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SermonsPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(SermonsPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
