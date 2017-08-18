import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { {{ properCase name }}Service } from '{{position "services"}}/{{ lowerCase name }}.service';

describe('Service: {{ properCase name }}Service', () => {
  let service: {{ properCase name }}Service;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {{ properCase name }}Service
      ]
    });

    service = TestBed.get({{ properCase name }}Service);
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('expects a GET request', () => { 
    service
      .get('/data')
      .subscribe(data => expect(data['name']).toEqual('Test Data'));

    const req = httpMock.expectOne('https://api.com');
      
    expect(req.request.method).toEqual('GET');

    req.flush({name: 'Test Data'});

  });
});
