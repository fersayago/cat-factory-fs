import { ICat, TCreateCatResponse, TGetCatByIdResponse, TGetCatsResponse } from "@/types/api/cats";
import { fetchAPI } from "@/app/_actions/fetchInstance";

export const getAllCats = async () => {
  const response = await fetchAPI<TGetCatsResponse>("/cats");
  return response;
};

export const getCatById = async (id: string) => {
  const response = await fetchAPI<TGetCatByIdResponse>(`/cats/${id}`);
  return response;
};

export const createCat = async (cat: ICat) => {
  const response = await fetchAPI<TCreateCatResponse>("/cats", "POST", cat);
  return response;
};
