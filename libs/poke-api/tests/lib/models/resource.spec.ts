import { BerryResource, Resource } from '../../../src/lib/models/resource';

describe('Unit | Models | Resource', () => {
  describe('Base class', () => {
    it('should be instantiated', () => {
      const resource = new Resource({
        name: 'stench',
        url: 'https://pokeapi.co/api/v2/ability/1/',
      });

      expect(resource).toBeInstanceOf(Resource);
      expect(resource).toHaveProperty('name');
      expect(resource).toHaveProperty('url');
      expect(resource.name).toStrictEqual('stench');
      expect(resource.url).toBeInstanceOf(URL);
      expect(resource.url.toString()).toStrictEqual(
        'https://pokeapi.co/api/v2/ability/1/'
      );
    });
  });

  describe('BerryResource class', () => {
    it('should be an instance of BerryResource and Resource classes', () => {
      const resource = new BerryResource({
        name: 'cheri',
        url: 'https://pokeapi.co/api/v2/berry/1/',
      });

      expect(resource).toBeInstanceOf(BerryResource);
      expect(resource).toBeInstanceOf(Resource);
      expect(resource).toHaveProperty('name');
      expect(resource).toHaveProperty('url');
      expect(resource.name).toStrictEqual('cheri');
      expect(resource.url).toBeInstanceOf(URL);
      expect(resource.url.toString()).toStrictEqual(
        'https://pokeapi.co/api/v2/berry/1/'
      );
    });

    it('should get a number as the resource id', () => {
      const resource = new BerryResource({
        name: 'pecha',
        url: 'https://pokeapi.co/api/v2/berry/3/',
      });

      expect(resource).toBeInstanceOf(BerryResource);
      expect(resource).toBeInstanceOf(Resource);
      expect(resource).toHaveProperty('name');
      expect(resource).toHaveProperty('url');
      expect(resource).toHaveProperty('id');
      expect(resource.name).toStrictEqual('pecha');
      expect(resource.url).toBeInstanceOf(URL);
      expect(resource.url.toString()).toStrictEqual(
        'https://pokeapi.co/api/v2/berry/3/'
      );
      expect(resource.id).toStrictEqual(3);
    });

    it('should get "undefined" as the resource id when no match found', () => {
      const resource1 = new BerryResource({
        name: 'mago',
        url: 'https://pokeapi.co/api/v2/berry//',
      });
      const resource2 = new BerryResource({
        name: 'aspear',
        url: 'https://pokeapi.co/api/v2/berry/aspear/',
      });
      const resource3 = new BerryResource({
        name: 'lum',
        url: 'https://pokeapi.co/api/v2/berry/lum9/',
      });

      // resource 1
      expect(resource1).toBeInstanceOf(BerryResource);
      expect(resource1).toBeInstanceOf(Resource);
      expect(resource1).toHaveProperty('name');
      expect(resource1).toHaveProperty('url');
      expect(resource1).toHaveProperty('id');
      expect(resource1.name).toStrictEqual('mago');
      expect(resource1.url).toBeInstanceOf(URL);
      expect(resource1.url.toString()).toStrictEqual(
        'https://pokeapi.co/api/v2/berry//'
      );
      expect(resource1.id).toStrictEqual(undefined);
      // resource2
      expect(resource2).toBeInstanceOf(BerryResource);
      expect(resource2).toBeInstanceOf(Resource);
      expect(resource2).toHaveProperty('name');
      expect(resource2).toHaveProperty('url');
      expect(resource2).toHaveProperty('id');
      expect(resource2.name).toStrictEqual('aspear');
      expect(resource2.url).toBeInstanceOf(URL);
      expect(resource2.url.toString()).toStrictEqual(
        'https://pokeapi.co/api/v2/berry/aspear/'
      );
      expect(resource2.id).toStrictEqual(undefined);
      // resource3
      expect(resource3).toBeInstanceOf(BerryResource);
      expect(resource3).toBeInstanceOf(Resource);
      expect(resource3).toHaveProperty('name');
      expect(resource3).toHaveProperty('url');
      expect(resource3).toHaveProperty('id');
      expect(resource3.name).toStrictEqual('lum');
      expect(resource3.url).toBeInstanceOf(URL);
      expect(resource3.url.toString()).toStrictEqual(
        'https://pokeapi.co/api/v2/berry/lum9/'
      );
      expect(resource3.id).toStrictEqual(undefined);
    });
  });
});
