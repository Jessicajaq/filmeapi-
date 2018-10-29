import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeapiComponent } from './filmeapi.component';

describe('FilmeapiComponent', () => {
  let component: FilmeapiComponent;
  let fixture: ComponentFixture<FilmeapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
