import Image from "next/image";
import Link from "next/link";

interface TrendProps {
  articleName: string;
  articleDesc: string;
  articleImage: string;
}

const TrendCard = ({ articleName, articleDesc, articleImage }: TrendProps) => {
  return (
    <div
      className={`group relative flex h-max min-h-full w-full min-w-fit cursor-pointer flex-col items-center justify-between gap-10 overflow-hidden rounded-xl`}
    >
      <div className="z-0 h-full w-full">
        <Image
          className="rounded-xl group-hover:scale-110"
          objectFit="cover"
          src={`/news/${articleImage}/cover.jpg`}
          layout="fill"
          alt="bg"
        />
      </div>
      <div className="z-10 flex h-full w-full flex-none flex-col items-start justify-between gap-6 overflow-hidden break-words rounded-b-xl bg-yellow-400 py-4 px-6 text-black shadow-[0_20px_50px_15px_rgb(0,0,0)]">
        <p className="text-start text-2xl">{articleName}</p>
        <p className="text-start text-lg">{articleDesc}</p>
      </div>
    </div>
  );
};

export default TrendCard;
