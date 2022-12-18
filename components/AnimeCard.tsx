import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AniProps {
  aniName: string;
  aniDesc: string;
  aniImage: string;
}

const AnimeCard = ({ aniName, aniDesc, aniImage }: AniProps) => {
  return (
    <div
      className={`group relative flex h-fit w-full basis-1/3 cursor-pointer overflow-hidden rounded-xl border-4 border-transparent duration-100 hover:border-cyan-200`}
    >
      <Image
        className="-z-10 rounded-xl group-hover:scale-110"
        objectFit="cover"
        src={`/anime/${aniImage}/cover.jpg`}
        layout="fill"
        alt="bg"
      />
      <div className="flex h-56 w-full flex-row items-end justify-between rounded-xl bg-gradient-to-t from-black to-transparent p-6">
        <p className="text-2xl">{aniName}</p>
        <p className="max-w-1/2 text-start text-lg">{aniDesc}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
