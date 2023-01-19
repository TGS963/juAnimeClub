import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AniProps {
  aniImage: string;
}

const GalleryInfo = ({ aniImage }: AniProps) => {
  return (
    <div className="h-11/12 fixed z-40 w-11/12 bg-white">
      <Image src={aniImage} layout="fill" objectFit="cover" />
    </div>
  );
};

export default GalleryInfo;
