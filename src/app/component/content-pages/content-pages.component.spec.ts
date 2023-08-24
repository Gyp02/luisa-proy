import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPagesComponent } from './content-pages.component';

describe('ContentPagesComponent', () => {
  let component: ContentPagesComponent;
  let fixture: ComponentFixture<ContentPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPagesComponent]
    });
    fixture = TestBed.createComponent(ContentPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
