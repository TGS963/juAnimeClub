import GalleryAnime from "@/components/GalleryAnime";
import { posterJSON } from "@/globals/posterJSON";
import { useEffect, useState } from "react";
import Link from "next/link";

const Gallery = () => {
  const getImages = async () => {
    const bgc = await fetch("/api/get-mockup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    //console.log(bgc.json());
    //setImages(await bgc.json());
  };
  return (
    <>
      <div className="sticky inset-0 z-40 flex w-full flex-row items-center justify-evenly bg-black/50 py-5 text-center text-yellow-400 backdrop-blur-lg">
        <p>Gloss(G): ₹99</p>
        <p>Matte(M): ₹99</p>
        <p>WaterProof Matte(W): ₹169</p>
      </div>
      <div onLoad={getImages} className="m-5 flex flex-col justify-center">
        {posterJSON.map((x) => {
          return (
            <div key={x.id} className="flex flex-col">
              <GalleryAnime aniName={x.name} numbers={x.gallery} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
