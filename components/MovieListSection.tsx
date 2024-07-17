"use client";
import { api } from "@/lib/service/network";
import { IMovie, IResponse } from "@/types/movie";
import React, { useEffect, useState } from "react";
import styles from "@/styles/movieSection.module.css";
import MovieCard from "./MovieCard";
import MovieCardList from "./MovieCardList";

type Props = {
  sectioTitle: string;
  url: string;
};

const MovieListSection = ({ sectioTitle, url }: Props) => {
  const [data, setData] = useState<IMovie[]>([]);

  const getData = async () => {
    const res = await api.get(url);
    const data = res.data as IResponse;
    setData(data.results);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="py-5">
      <h2 className="text-2xl uppercase font-bold">{sectioTitle}</h2>
      <div className={styles.containerList}>
        {data.slice(0, 5).map((movie) => (
          <MovieCardList movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieListSection;
