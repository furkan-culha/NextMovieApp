"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ dt }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[400px] relative imgContainer cursor-pointer"
    >
      <Image
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original${
          dt?.backdrop_path || dt?.poster_path
        }`}
        alt={dt?.title || "Movie Poster"}
        width={400}
        height={300}
        className="object-cover"
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold text-white">
          {dt?.title || "Başlık Bilgisi Yok"}
        </div>
        <div className="text-white">
          {dt?.release_date || "Tarih Bilgisi Yok"} -{" "}
          {dt?.vote_average || "Puan Bilgisi Yok"}
        </div>
      </div>
    </div>
  );
};

export default Movies;
