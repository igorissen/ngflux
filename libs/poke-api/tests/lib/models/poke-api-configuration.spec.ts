import { PokeApiConfiguration } from '../../../src/lib/models/poke-api-configuration';

describe('Unit | Models | PokeApiConfiguration', () => {
  it('should be instantiated with default values', () => {
    const configuration = new PokeApiConfiguration();

    expect(configuration).toBeInstanceOf(PokeApiConfiguration);
    expect(configuration).toHaveProperty('baseUrl');
    expect(configuration).toHaveProperty('version');
    expect(configuration.baseUrl).toStrictEqual('https://pokeapi.co/api');
    expect(configuration.version).toStrictEqual('v2');
  });

  it('should be instantiated with provided baseUrl and default version values', () => {
    const configuration = new PokeApiConfiguration({
      baseUrl: 'https://google.be',
    });

    expect(configuration).toBeInstanceOf(PokeApiConfiguration);
    expect(configuration).toHaveProperty('baseUrl');
    expect(configuration).toHaveProperty('version');
    expect(configuration.baseUrl).toStrictEqual('https://google.be');
    expect(configuration.version).toStrictEqual('v2');
  });

  it('should be instantiated with default baseUrl and provided version values', () => {
    const configuration = new PokeApiConfiguration({ version: 'v3' });

    expect(configuration).toBeInstanceOf(PokeApiConfiguration);
    expect(configuration).toHaveProperty('baseUrl');
    expect(configuration).toHaveProperty('version');
    expect(configuration.baseUrl).toStrictEqual('https://pokeapi.co/api');
    expect(configuration.version).toStrictEqual('v3');
  });

  it('should be instantiated with provided values', () => {
    const configuration = new PokeApiConfiguration({
      baseUrl: 'https://bing.be',
      version: 'v1',
    });

    expect(configuration).toBeInstanceOf(PokeApiConfiguration);
    expect(configuration).toHaveProperty('baseUrl');
    expect(configuration).toHaveProperty('version');
    expect(configuration.baseUrl).toStrictEqual('https://bing.be');
    expect(configuration.version).toStrictEqual('v1');
  });
});
