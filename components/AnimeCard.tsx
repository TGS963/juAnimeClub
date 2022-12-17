import Image from "next/image";
import Link from "next/link";

interface AniProps {
  aniName: string;
  aniDesc: string;
  aniImage: string;
}

const AnimeCard = ({ aniName, aniDesc, aniImage }: AniProps) => {
  return (
    <div className={`relative h-fit w-full rounded-xl`}>
      <Image
        className="-z-10 rounded-xl"
        objectFit="cover"
        src={`/anime/${aniImage}/cover.jpg`}
        layout="fill"
        alt="bg"
      />
      <div className="flex h-fit w-full flex-col items-start justify-start gap-6 rounded-xl bg-gradient-to-r from-black to-transparent p-6">
        <p className="pb-14 text-2xl">{aniName}</p>
        <p className="max-w-1/2 text-start text-lg">{aniDesc}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
