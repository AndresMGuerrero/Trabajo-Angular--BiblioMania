import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliomaniaCategoriesComponent } from './bibliomania-categories.component';

describe('BibliomaniaCategoriesComponent', () => {
  let component: BibliomaniaCategoriesComponent;
  let fixture: ComponentFixture<BibliomaniaCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliomaniaCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibliomaniaCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
