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
      className={`relative flex h-full min-h-full w-full flex-col items-center justify-between gap-10 rounded-xl`}
    >
      <div className="z-10 h-1/2 w-full">
        <Image
          className="rounded-xl"
          objectFit="cover"
          src={`/news/${articleImage}/cover.jpg`}
          layout="fill"
          alt="bg"
        />
      </div>
      <div className="z-10 flex h-1/2 w-full flex-none flex-col items-start justify-between gap-6 rounded-b-xl bg-yellow-400 p-6 text-black shadow-inner shadow-black">
        <p className="text-start text-2xl">{articleName}</p>
        <p className="text-start text-lg">{articleDesc}</p>
      </div>
    </div>
  );
};

export default TrendCard;
