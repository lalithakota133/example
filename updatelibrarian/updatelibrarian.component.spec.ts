import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelibrarianComponent } from './updatelibrarian.component';

describe('UpdatelibrarianComponent', () => {
  let component: UpdatelibrarianComponent;
  let fixture: ComponentFixture<UpdatelibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelibrarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
