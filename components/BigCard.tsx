import Image from "next/image";
import Link from "next/link";

interface BigCardProps {
  cardTitle: string;
  cardDesc: string;
  cardImage: string;
  cardButton: string;
}

const BigCard = ({
  cardTitle,
  cardDesc,
  cardImage,
  cardButton,
}: BigCardProps) => {
  return (
    <div className="relative h-fit w-full rounded-xl text-black">
      <Image
        className="-z-10 rounded-xl"
        objectFit="cover"
        src={cardImage}
        layout="fill"
        alt="bg"
      />
      <div className="flex h-fit w-full flex-col items-start justify-start gap-6 rounded-xl bg-gradient-to-r from-yellow-400 to-transparent p-6">
        <p className="pb-14 text-4xl">{cardTitle}</p>
        <p className="max-w-1/2 text-start text-xl">{cardDesc}</p>
        <button className="z-10 rounded-xl bg-black p-4 text-lg text-slate-50">
          {cardButton}
        </button>
      </div>
    </div>
  );
};

export default BigCard;
