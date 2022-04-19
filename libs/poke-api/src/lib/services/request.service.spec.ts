import { RequestService } from './request.service';

describe('RequestService', () => {
  let service: RequestService;
  const httpClient = {
    get: jest.fn(),
  };

  beforeEach(() => {
    service = new RequestService(httpClient as any);
  });

  it('should be instantiated', () => {
    expect(service).toBeInstanceOf(RequestService);
  });
});
