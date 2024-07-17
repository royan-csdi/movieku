import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import MovieSection from "@/components/MovieSection";
import { Suspense } from "react";
import Loading from "./loading";
import MovieListSection from "@/components/MovieListSection";

export default function Home() {
  return (
    <main className="flex flex-col p-8">
      <Suspense fallback={<MovieCardSkeleton />}>
        <MovieSection sectioTitle="Now Playing" url="/now_playing" />
      </Suspense>
      <Suspense fallback={<MovieCardSkeleton />}>
        <MovieSection sectioTitle="Popular" url="/popular" />
      </Suspense>
      <Suspense fallback={<MovieCardSkeleton />}>
        <MovieSection sectioTitle="Top Rated" url="/top_rated" />
      </Suspense>
      <MovieListSection sectioTitle="Upcoming" url="/upcoming" />
    </main>
  );
}
