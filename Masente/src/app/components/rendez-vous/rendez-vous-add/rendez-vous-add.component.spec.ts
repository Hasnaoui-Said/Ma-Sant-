import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousAddComponent } from './rendez-vous-add.component';

describe('RendezVousAddComponent', () => {
  let component: RendezVousAddComponent;
  let fixture: ComponentFixture<RendezVousAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
