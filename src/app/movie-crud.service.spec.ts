import { TestBed } from '@angular/core/testing';

import { MovieCrudService } from './movie-crud.service';

describe('MovieCrudService', () => {
  let service: MovieCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
