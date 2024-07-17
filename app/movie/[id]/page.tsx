import React from "react";
import { getMovie } from "./action";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

interface Productioncompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

interface Genre {
  id: number;
  name: string;
}

const DetailMoviePage = async ({ params }: { params: { id: string } }) => {
  const res = await getMovie(params.id);

  const movie: IMovieDetail = res;

  return (
    <div className="p-8 flex gap-8">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={300}
        className="object-cover h-[500px] rounded shadow"
      />
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
        </div>
        <div>
          <p>{movie.overview}</p>
        </div>
        <div className="flex gap-2">
          <p>🗓️{movie.release_date}</p>
          <p>❤️{movie.vote_average}</p>
          <p>🧮{movie.vote_count}</p>
          <p>⌚{movie.runtime}</p>
          <p>💵{movie.revenue}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailMoviePage;
