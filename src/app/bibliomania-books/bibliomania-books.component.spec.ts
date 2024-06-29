import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliomaniaBooksComponent } from './bibliomania-books.component';

describe('BibliomaniaBooksComponent', () => {
  let component: BibliomaniaBooksComponent;
  let fixture: ComponentFixture<BibliomaniaBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliomaniaBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibliomaniaBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
