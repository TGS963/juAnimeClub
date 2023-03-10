import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AniProps {
  aniName: string;
  aniDesc: string;
  aniImage: string;
  aniMal: string;
}

const AnimeCard = ({ aniName, aniDesc, aniImage, aniMal }: AniProps) => {
  return (
    <Link href={aniMal}>
      <div
        className={`group relative flex h-fit w-full basis-1/3 cursor-pointer overflow-hidden rounded-xl border-4 border-transparent duration-100 hover:border-cyan-200`}
      >
        <div className="absolute h-full w-1/2 -translate-y-1/4 -translate-x-2/4 rotate-12 -skew-y-12 bg-gradient-to-t from-transparent to-slate-200 opacity-30 group-hover:w-3/4" />
        <Image
          className="-z-10 rounded-xl group-hover:scale-110"
          objectFit="cover"
          src={aniImage}
          layout="fill"
          alt="bg"
        />
        <div className="flex h-56 w-full flex-row items-end justify-between rounded-xl bg-gradient-to-t from-black to-transparent p-6">
          <p className="text-2xl">{aniName}</p>
          <p className="max-w-1/2 text-start text-lg">{aniDesc}</p>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
