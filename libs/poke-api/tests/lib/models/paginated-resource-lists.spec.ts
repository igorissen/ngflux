import { PaginatedResourceLists } from '../../../src/lib/models/paginated-resource-lists';
import { BerryResource } from '../../../src/lib/models/resource';
import { NamedApiResource, NamedApiResourceList } from '../../../src/lib/types';

describe('Unit | Models | PaginatedResourceLists', () => {
  describe('Berries resource lists', () => {
    const data: NamedApiResourceList = {
      count: 64,
      next: 'https://pokeapi.co/api/v2/berry?offset=20&limit=20',
      previous: null,
      results: [
        {
          name: 'cheri',
          url: 'https://pokeapi.co/api/v2/berry/1/',
        },
        {
          name: 'chesto',
          url: 'https://pokeapi.co/api/v2/berry/2/',
        },
        {
          name: 'pecha',
          url: 'https://pokeapi.co/api/v2/berry/3/',
        },
        {
          name: 'rawst',
          url: 'https://pokeapi.co/api/v2/berry/4/',
        },
        {
          name: 'aspear',
          url: 'https://pokeapi.co/api/v2/berry/5/',
        },
        {
          name: 'leppa',
          url: 'https://pokeapi.co/api/v2/berry/6/',
        },
        {
          name: 'oran',
          url: 'https://pokeapi.co/api/v2/berry/7/',
        },
        {
          name: 'persim',
          url: 'https://pokeapi.co/api/v2/berry/8/',
        },
        {
          name: 'lum',
          url: 'https://pokeapi.co/api/v2/berry/9/',
        },
        {
          name: 'sitrus',
          url: 'https://pokeapi.co/api/v2/berry/10/',
        },
        {
          name: 'figy',
          url: 'https://pokeapi.co/api/v2/berry/11/',
        },
        {
          name: 'wiki',
          url: 'https://pokeapi.co/api/v2/berry/12/',
        },
        {
          name: 'mago',
          url: 'https://pokeapi.co/api/v2/berry/13/',
        },
        {
          name: 'aguav',
          url: 'https://pokeapi.co/api/v2/berry/14/',
        },
        {
          name: 'iapapa',
          url: 'https://pokeapi.co/api/v2/berry/15/',
        },
        {
          name: 'razz',
          url: 'https://pokeapi.co/api/v2/berry/16/',
        },
        {
          name: 'bluk',
          url: 'https://pokeapi.co/api/v2/berry/17/',
        },
        {
          name: 'nanab',
          url: 'https://pokeapi.co/api/v2/berry/18/',
        },
        {
          name: 'wepear',
          url: 'https://pokeapi.co/api/v2/berry/19/',
        },
        {
          name: 'pinap',
          url: 'https://pokeapi.co/api/v2/berry/20/',
        },
      ],
    };

    it('should be instantiated', () => {
      const paginatedResourceLists = new PaginatedResourceLists<
        BerryResource,
        { new (item: NamedApiResource): BerryResource }
      >(data, BerryResource);

      expect(paginatedResourceLists).toBeInstanceOf(PaginatedResourceLists);
      expect(paginatedResourceLists).toHaveProperty('count');
      expect(paginatedResourceLists).toHaveProperty('next');
      expect(paginatedResourceLists).toHaveProperty('previous');
      expect(paginatedResourceLists).toHaveProperty('results');
      expect(paginatedResourceLists.count).toStrictEqual(64);
      expect(paginatedResourceLists.next).toStrictEqual(
        'https://pokeapi.co/api/v2/berry?offset=20&limit=20'
      );
      expect(paginatedResourceLists.previous).toStrictEqual(null);
      expect(paginatedResourceLists.results).toBeInstanceOf(Array);
      expect(paginatedResourceLists.results.length).toStrictEqual(20);
      expect(paginatedResourceLists.results[0]).toBeInstanceOf(BerryResource);
      expect(paginatedResourceLists.results[0]).toHaveProperty('name');
      expect(paginatedResourceLists.results[0]).toHaveProperty('url');
      expect(paginatedResourceLists.results[0].name).toStrictEqual('cheri');
      expect(paginatedResourceLists.results[0].url).toBeInstanceOf(URL);
      expect(paginatedResourceLists.results[0].url.toString()).toStrictEqual(
        'https://pokeapi.co/api/v2/berry/1/'
      );
    });
  });
});
