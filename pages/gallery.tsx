import GalleryAnime from "@/components/GalleryAnime";
import { useEffect, useState } from "react";
import Link from "next/link";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      id: 0,
      name: "BRUH",
      gallery: [
        {
          id: 0,
          code: "ONE-1",
          image: "/black.jpg",
        },
        {
          id: 1,
          code: "TWO-2",
          image: "/black.jpg",
        },
      ],
    },
  ]);
  const getImages = async () => {
    const bgc = await fetch("/api/get-mockup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    //console.log(bgc.json());
    //setImages(await bgc.json());
  };
  return (
    <div onLoad={getImages}>
      {images.map((x) => {
        return (
          <div key={x.id} className="flex flex-col">
            <GalleryAnime aniName={x.name} numbers={x.gallery} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
