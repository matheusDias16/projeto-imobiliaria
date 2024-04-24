import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTiposComponent } from './criar-tipos.component';

describe('CriarTiposComponent', () => {
  let component: CriarTiposComponent;
  let fixture: ComponentFixture<CriarTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarTiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
