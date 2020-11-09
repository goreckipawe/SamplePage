import { TestBed } from '@angular/core/testing';

import { SamplePageDataDownloadService } from './sample-page-data-download.service';

describe('SamplePageDataDownloadService', () => {
  let service: SamplePageDataDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplePageDataDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
