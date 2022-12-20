import Image from "next/image";
import Link from "next/link";

const BigCard = () => {
  return (
    <div className="relative h-fit w-full rounded-xl text-black">
      <Image
        className="-z-10 rounded-xl"
        objectFit="cover"
        src={`/big.jpg`}
        layout="fill"
        alt="bg"
      />
      <div className="flex h-fit w-full flex-col items-start justify-start gap-6 rounded-xl bg-gradient-to-r from-yellow-400 to-transparent p-6">
        <p className="pb-14 text-4xl">
          The definitive guide to all things Anime!
        </p>
        <p className="max-w-1/2 text-start text-xl">
          Keep up with the lore of the anime community!
        </p>
        <button className="rounded-xl bg-black p-4 text-lg text-slate-50">
          Read Our Newsletter Now!
        </button>
      </div>
    </div>
  );
};

export default BigCard;
