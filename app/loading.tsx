import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex gap-8 p-8">
      <div className="w-[300px] h-[500px] bg-gray-200 rounded-md animate-pulse"></div>
      <div className="py-2 flex flex-col gap-4 w-[500px]">
        <div className="w-2/4 h-8 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="flex justify-between py-2 gap-2">
          <div className="w-1/5 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-1/5 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-1/5 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-1/5 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-1/5 h-4 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
