import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeApiConfiguration } from '../models/poke-api-configuration';

@Injectable({ providedIn: 'root' })
export class RequestService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _configuration: PokeApiConfiguration
  ) {}
}
