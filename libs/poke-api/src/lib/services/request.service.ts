import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RequestService {
  constructor(private readonly _httpClient: HttpClient) {}
}
