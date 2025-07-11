"use client";

import { useGetAllCats } from "./_hooks/useCats";
import { ICat } from "@/types/api/cats";
import Image from "next/image";

export default function Home() {
  const {
    data: cats,
    isLoading,
    error,
  } = useGetAllCats();

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
        <h1 className="text-3xl font-bold text-gray-900">Gatos</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar Gato
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats?.map((cat: ICat) => (
          <div
            key={cat.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {cat.imageUrl ? (
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200"></div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {cat.name}
              </h2>
              <div className="mt-2 space-y-1">
                <p className="text-gray-600">Edad: {cat.age} años</p>
                <p className="text-gray-600">
                  Género: {cat.gender === "MALE" ? "Macho" : "Hembra"}
                </p>
                <p className="text-gray-600">Color: {cat.color}</p>
                <p className="text-gray-600">Raza: {cat.breed.name}</p>
              </div>
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
