export type Berry = {
  firmness: NamedApiResource;
  flavors: BerryFlavor[];
  growth_time: number;
  id: number;
  item: NamedApiResource;
  max_harvest: number;
  name: string;
  natural_gift_power: number;
  natural_gift_type: NamedApiResource;
  size: number;
  smoothness: number;
  soil_dryness: number;
};
export type BerryFlavor = {
  potency: number;
  flavor: NamedApiResource;
};
export type NamedApiResource = {
  name: string;
  url: string;
};
export type NamedApiResourceList = {
  count: number;
  next: string | null | undefined;
  previous: string | null | undefined;
  results: NamedApiResource[];
};
export type PokeApiOptions = {
  baseUrl?: string;
  version?: string;
};
