"use client";

import MovieCard from "@/components/MovieCard";
import { IMovie } from "@/types/movie";
import React, { useEffect, useState } from "react";

const FavoritePage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("favoriteMovie") ?? "[]";
    setFavoriteMovies(JSON.parse(data));
  }, []);
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
