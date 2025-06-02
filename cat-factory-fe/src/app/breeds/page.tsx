"use client";

import { useQuery } from "@tanstack/react-query";
import { Breed } from "@/types/cats";
import Image from "next/image";

// Function to fetch breeds from the API
async function getBreeds(): Promise<Breed[]> {
  const response = await fetch("http://localhost:4001/breeds");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default function BreedsPage() {
  const {
    data: breeds,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["breeds"],
    queryFn: getBreeds,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error.message}</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Razas de Gatos</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar Raza
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breeds?.map((breed: Breed) => (
          <div
            key={breed.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {breed.imageUrl && (
              <Image
                src={breed.imageUrl}
                alt={breed.name}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {breed.name}
              </h2>
              <p className="mt-2 text-gray-600">{breed.description}</p>
              <div className="mt-4 flex space-x-2">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded text-sm">
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
