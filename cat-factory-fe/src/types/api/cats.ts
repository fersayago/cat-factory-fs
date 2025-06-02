import { paths } from "../schema";
import { IBreed } from "./breeds";

export type TGetCatsResponse = paths["/cats"]["get"]["responses"]["200"]["content"]["application/json"];
export type TGetCatByIdResponse = paths["/cats/{id}"]["get"]["responses"]["200"]["content"]["application/json"];
export type TCreateCatResponse = paths["/cats"]["post"]["responses"]["201"]["content"]["application/json"];


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
