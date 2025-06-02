import { queryKeys } from "@/core/queryKeys";
import { useEffect } from "react";
import { ApiNotification } from "../_components/ApiNotification/ApiNotification";
import { createBreed, getAllBreeds, getBreedById } from "../_actions/breeds";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IBreed } from "@/types/api/breeds";

export function useGetAllBreeds() {
  const query = useQuery({
    queryKey: [queryKeys.breeds],
    queryFn: () => getAllBreeds(),
  })

  useEffect(() => {
    if (query.error) ApiNotification.error("Error loading breeds", query.error);
  }, [query.error]);

  return query;
}

export function useGetBreedById(id: string) {
  const query = useQuery({
    queryKey: [queryKeys.breeds, id],
    queryFn: () => getBreedById(id),
  });

  useEffect(() => {
    if (query.error) ApiNotification.error("Error loading breed", query.error);
  }, [query.error]);

  return query;
}

export function useCreateBreed() {
  const mutation = useMutation({
    mutationFn: (breed: IBreed) => createBreed(breed),
  })

  useEffect(() => {
    if (mutation.error) ApiNotification.error("Error creating breed", mutation.error);
  }, [mutation.error]);

  return mutation;
}