import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AniProps {
  aniName: string;
  aniDesc: string;
  aniImage: string;
}

const AnimeCard = ({ aniName, aniDesc, aniImage }: AniProps) => {
  const [focusAnim, setFocusAnim] = useState(false);

  return (
    <div
      className={`relative flex h-fit w-full grow-0 overflow-hidden rounded-xl border-slate-400`}
      onMouseOver={() => setFocusAnim(true)}
      onMouseLeave={() => setFocusAnim(false)}
    >
      <div
        className={`flex flex-row items-center justify-center ${
          focusAnim ? "absolute animate-scale-in" : "hidden"
        } h-full w-full -translate-x-96`}
      >
        <div className="h-full w-2/12 bg-white" />
      </div>
      <Image
        className="-z-10 rounded-xl hover:opacity-0"
        objectFit="cover"
        src={`/anime/${aniImage}/cover.jpg`}
        layout="fill"
        alt="bg"
      />
      <div className="flex h-48 w-full flex-row items-end justify-between rounded-xl bg-gradient-to-t from-black to-transparent p-6">
        <p className="text-2xl">{aniName}</p>
        <p className="max-w-1/2 text-start text-lg">{aniDesc}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
