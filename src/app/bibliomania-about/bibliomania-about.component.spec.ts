import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliomaniaAboutComponent } from './bibliomania-about.component';

describe('BibliomaniaAboutComponent', () => {
  let component: BibliomaniaAboutComponent;
  let fixture: ComponentFixture<BibliomaniaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliomaniaAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibliomaniaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
