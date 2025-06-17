import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaDocumento } from './firma-documento';

describe('FirmaDocumento', () => {
  let component: FirmaDocumento;
  let fixture: ComponentFixture<FirmaDocumento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirmaDocumento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmaDocumento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
