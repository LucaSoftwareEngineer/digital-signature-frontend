import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaDocumentoSuccess } from './firma-documento-success';

describe('FirmaDocumentoSuccess', () => {
  let component: FirmaDocumentoSuccess;
  let fixture: ComponentFixture<FirmaDocumentoSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirmaDocumentoSuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmaDocumentoSuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
