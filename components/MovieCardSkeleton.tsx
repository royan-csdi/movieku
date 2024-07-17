import React from "react";
import styles from "@/styles/movieSection.module.css";

const MovieCardSkeleton = () => {
  return (
    <div className={styles.container}>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            className="w-full min-w-[300px] flex flex-col space-y-3 animate-pulse"
            key={index}
          >
            <div className="w-full h-64 bg-slate-100 rounded-md"></div>
            <div className="w-2/4 h-6 bg-slate-100 rounded-md"></div>
            <div className="flex justify-between py-2">
              <div className="w-2/4 h-4 bg-slate-100 rounded-md"></div>
              <div className="w-1/4 h-4 bg-slate-100 rounded-md"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieCardSkeleton;
