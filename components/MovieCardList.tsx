import { IMovie } from "@/types/movie";
import Image from "next/image";
import React from "react";
import styles from "@/styles/movieCard.module.css";
import Link from "next/link";

type Props = {
  movie: IMovie;
};
const MovieCardList = ({ movie }: Props) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-white shadow p-4 rounded flex gap-6 hover:shadow-lg">
        <Image
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.title}
          width={100}
          height={60}
          className={styles.imageList}
        />
        <div>
          <h3 className="text-lg font-bold">{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p className="text-ellipsis">{movie.overview.slice(0, 60)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCardList;
