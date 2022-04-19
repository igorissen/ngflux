import { NamedApiResource } from '../types';

const BERRY_PATTERN = /(?<path>\/api\/v2\/berry\/)(?<id>[0-9]+)\//;

export class Resource {
  readonly name: string;
  readonly url: URL;

  constructor(data: NamedApiResource) {
    this.name = data.name;
    this.url = new URL(data.url);
  }
}

export class BerryResource extends Resource {
  constructor(data: NamedApiResource) {
    super(data);
  }

  get id(): number | undefined {
    const match = this.url.pathname.match(BERRY_PATTERN);
    if (!match) return undefined;

    const { id } = (match as any).groups;
    return Number(id);
  }
}
