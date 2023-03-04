import { NamedAPIResource } from "./NamedAPIResource";

export interface NamedAPIResourceList {
  count: number,
  next: string | null,
  previous: string | null,
  results: NamedAPIResource[],
}