import { NgxPokeApiOptions } from '../types';

export class NgxPokeApiConfiguration {
  baseUrl: string;
  version: string;

  constructor(options?: NgxPokeApiOptions) {
    this.baseUrl = options?.baseUrl ?? 'https://pokeapi.co/api';
    this.version = options?.version ?? 'v2';
  }
}
