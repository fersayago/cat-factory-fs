import { paths } from "../schema";

export type TGetCatsResponse = paths["/cats"]["get"]["responses"]["200"]["content"]["application/json"];

export type TGetBreedsResponse = paths["/breeds"]["get"]["responses"]["200"]["content"]["application/json"];

export type TGetBreedByIdResponse = paths["/breeds/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type TCreateCatResponse = paths["/cats"]["post"]["responses"]["201"]["content"]["application/json"];

export type TGetCatByIdResponse = paths["/cats/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

export interface IBreed {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
}

export interface ICat {
  id: string;
  name: string;
  age: number;
  gender: string;
  color: string;
  imageUrl: string | null;
  breedId: string;
  breed: IBreed;
}
