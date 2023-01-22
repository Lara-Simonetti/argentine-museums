/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { MuseumListComponent } from './museum-list.component';
import { Museum } from '../museum';

describe('MuseumListComponent', () => {
  let component: MuseumListComponent;
  let fixture: ComponentFixture<MuseumListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MuseumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumListComponent);
    component = fixture.componentInstance;

    //Creates randomized museum information
    faker.seed(123);

    for(let i = 0; i < 10; i++) {
      const museum = new Museum(
        parseInt(faker.datatype.uuid()),
        faker.internet.url(),
        faker.internet.url(),
        faker.company.bs(),
        faker.address.streetAddress(),
        faker.phone.imei(),
        faker.lorem.paragraphs(3),
        faker.internet.email(),
        faker.address.city(),
        faker.address.city(),
        null
      );
      component.museums.push(museum);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of museums', () => {
    expect(component.museums.length).toBeGreaterThan(0);
  });

  it('should have 1 <h1> element', () => {
    expect(debug.queryAll(By.css('h1'))).toHaveSize(1);
  });

  it('should have 3 <p> elements', () => {
    expect(debug.queryAll(By.css('p'))).toHaveSize(3);
  });

  it('should have 2 <a> elements', () => {
    expect(debug.queryAll(By.css('a'))).toHaveSize(2);
  });

});
