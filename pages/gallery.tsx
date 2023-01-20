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
      <div className="sticky inset-0 z-10 mr-44 flex w-full flex-col items-start justify-evenly break-words bg-black/50 p-2 py-5 text-yellow-400 backdrop-blur-lg md:flex-row md:items-center md:p-0 md:text-center">
        <p>
          Gloss(G): <span className="text-emerald-500">₹99</span>
        </p>
        <p>
          Matte(M): <span className="text-emerald-500">₹99</span>
        </p>
        <p>
          WaterProof Matte(W): <span className="text-emerald-500">₹169</span>
        </p>
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
      <DisclamerComponent />
    </>
  );
};

const DisclamerComponent = () => {
  return (
    <div className="mt-16 flex w-full items-center justify-center border-t-2 border-t-yellow-400 bg-gray-900 bg-opacity-30">
      <p className="flex w-fit flex-col gap-4  p-6 text-center text-yellow-400">
        Disclaimer: All the posters that are available here or sold by us are-
        <ol
          typeof="1"
          className="flex flex-col gap-2 text-start text-base text-white"
        >
          <li>1. Either totally made made by us</li>
          <li>
            2. Or made from the images/posters/wallpapers that are free to
            download and/or use
          </li>
          <li>
            3. Or made by any artist(s) whose permission is taken and credit
            is given properly
          </li>
        </ol>
      </p>
    </div>
  );
};

export default Gallery;
