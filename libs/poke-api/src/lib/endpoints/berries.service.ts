import { Injectable } from '@angular/core';
import { RequestService } from '../services/request.service';

@Injectable({ providedIn: 'root' })
export class BerriesService {
  constructor(private readonly _requestService: RequestService) {}
}
