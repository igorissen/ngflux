import { RequestService } from '../../../src/lib/services/request.service';
import { PokeApiConfiguration } from '../../../src/lib/models/poke-api-configuration';

describe('Unit | Services | RequestService', () => {
  let service: RequestService;
  const httpClient = {
    get: jest.fn(),
  };
  const configuration = new PokeApiConfiguration();

  beforeEach(() => {
    service = new RequestService(httpClient as any, configuration);
  });

  it('should be instantiated', () => {
    expect(service).toBeInstanceOf(RequestService);
    expect(service).toHaveProperty('_httpClient');
    expect(service).toHaveProperty('_configuration');
  });
});
