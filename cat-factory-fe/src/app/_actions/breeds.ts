import { IBreed, TCreateBreedResponse, TGetBreedByIdResponse } from "@/types/api/breeds";
import { TGetBreedsResponse } from "@/types/api/breeds";
import { fetchAPI } from "./fetchInstance";

export const getAllBreeds = async () => {
  const response = await fetchAPI<TGetBreedsResponse>("/breeds");
  return response;
};

export const getBreedById = async (id: string) => {
  const response = await fetchAPI<TGetBreedByIdResponse>(`/breeds/${id}`);
  return response;
};

export const createBreed = async (breed: IBreed) => {
  const response = await fetchAPI<TCreateBreedResponse>("/breeds", "POST", breed);
  return response;
};

