import { queryKeys } from "@/core/queryKeys";
import { createCat, getAllCats, getCatById } from "../_actions/cats";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ApiNotification } from "../_components/ApiNotification/ApiNotification";
import { ICat } from "@/types/api/cats";

export function useGetAllCats() {
  const query = useQuery({
    queryKey: [queryKeys.cats],
    queryFn: () => getAllCats(),
  });

  useEffect(() => {
    if (query.error) ApiNotification.error("Error loading cats", query.error);
  }, [query.error]);

  return query;
}

export function useGetCatById(id: string) {
  const query = useQuery({
    queryKey: [queryKeys.cats, id],
    queryFn: () => getCatById(id),
  });

  useEffect(() => {
    if (query.error) ApiNotification.error("Error loading cat", query.error);
  }, [query.error]);

  return query;
}

export function useCreateCat() {
  const mutation = useMutation({
    mutationFn: (cat: ICat) => createCat(cat),
  });

  useEffect(() => {
    if (mutation.error) ApiNotification.error("Error creating cat", mutation.error);
  }, [mutation.error]);

  return mutation;
}