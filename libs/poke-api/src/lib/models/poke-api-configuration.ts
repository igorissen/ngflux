import { PokeApiOptions } from '../types';

export class PokeApiConfiguration {
  baseUrl: string;
  version: string;

  constructor(options?: PokeApiOptions) {
    this.baseUrl = options?.baseUrl ?? 'https://pokeapi.co/api';
    this.version = options?.version ?? 'v2';
  }
}
