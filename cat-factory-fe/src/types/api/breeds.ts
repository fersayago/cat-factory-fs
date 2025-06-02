import { paths } from "../schema";

export type TGetBreedsResponse = paths["/breeds"]["get"]["responses"]["200"]["content"]["application/json"];
export type TGetBreedByIdResponse = paths["/breeds/{id}"]["get"]["responses"]["200"]["content"]["application/json"];
export type TCreateBreedResponse = paths["/breeds"]["post"]["responses"]["201"]["content"]["application/json"];
export interface IBreed {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
}
