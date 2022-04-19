import { PokeApiConfiguration } from '../../../src/lib/models/poke-api-configuration';
import { RequestService } from '../../../src/lib/services/request.service';
import { BerriesService } from '../../../src/lib/endpoints/berries.service';

describe('Unit | Endpoints | BerriesService', () => {
  let service: BerriesService;
  const httpClient = {
    get: jest.fn(),
  };
  const configuration = new PokeApiConfiguration();
  const requestService = new RequestService(httpClient as any, configuration);

  beforeEach(() => {
    service = new BerriesService(requestService);
  });

  it('should be instantiated', () => {
    expect(service).toBeInstanceOf(BerriesService);
    expect(service).toHaveProperty('_requestService');
  });
});
