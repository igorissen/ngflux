import { NamedApiResource, NamedApiResourceList } from '../types';

export class PaginatedResourceLists<
  T,
  CT extends { new (item: NamedApiResource): T }
> {
  readonly count: number;
  readonly next: string | null | undefined;
  readonly previous: string | null | undefined;
  readonly results: T[];

  constructor(data: NamedApiResourceList, genericType: CT) {
    this.count = data.count;
    this.next = data.next;
    this.previous = data.previous;
    this.results = data.results.map((item) => new genericType(item));
  }

  private getPagination(url: URL): [number, number] {
    const { searchParams } = url;
    const offset = Number(searchParams.get('offset'));
    const limit = Number(searchParams.get('limit'));

    return [offset, limit];
  }

  get hasNext(): boolean {
    return !!this.next;
  }

  get hasPrevious(): boolean {
    return !!this.previous;
  }

  get nextPagination(): [number, number] | undefined {
    if (!this.hasNext) return undefined;

    const url = new URL(this.next as string);
    return this.getPagination(url);
  }

  get previousPagination(): [number, number] | undefined {
    if (!this.hasPrevious) return undefined;

    const url = new URL(this.previous as string);
    return this.getPagination(url);
  }
}
