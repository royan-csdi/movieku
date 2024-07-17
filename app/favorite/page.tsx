"use client";

import MovieCard from "@/components/MovieCard";
import { IMovie } from "@/types/movie";
import React from "react";

const FavoritePage = () => {
  const favoriteMovies = JSON.parse(
    localStorage.getItem("favoriteMovie") ?? "[]"
  );

  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen p-8">
      {favoriteMovies.length === 0 && "No favorite movies yet."}{" "}
      {favoriteMovies.map((movie: IMovie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoritePage;
