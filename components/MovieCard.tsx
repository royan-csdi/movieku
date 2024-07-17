import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/movieCard.module.css";
import { IMovie } from "@/types/movie";
type Props = {
  movie: IMovie;
};
const MovieCard = ({ movie }: Props) => {
  const handleFavorite = (movie: IMovie) => {
    const favoriteMovies = JSON.parse(
      localStorage.getItem("favoriteMovie") ?? "[]"
    );
    const isFavorite = favoriteMovies.some(
      (favMovie: IMovie) => favMovie.id === movie.id
    );
    const updatedFavorites = isFavorite
      ? favoriteMovies.filter((favMovie: IMovie) => favMovie.id !== movie.id)
      : [
          ...favoriteMovies,
          {
            id: movie.id,
            poster_path: movie.poster_path,
            title: movie.title,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
          },
        ];
    localStorage.setItem("favoriteMovie", JSON.stringify(updatedFavorites));
    alert("Movie added to favorites");
  };
  return (
    <Link href={`/movie/${movie.id}`} key={movie.id}>
      <div className={styles.card}>
        <Image
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={200}
          className={styles.image}
        />
        <div
          className={styles.favorite}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleFavorite(movie);
          }}
        >
          ⭐
        </div>
        <h3 className="text-xl py-4 font-bold">{movie.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm">{movie.release_date}</p>
          <div
            className={`rounded-full w-10 h-10 flex justify-center items-center text-slate-200 ${
              movie.vote_average > 6 ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <span className="text-sm">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
