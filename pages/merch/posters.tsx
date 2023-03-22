import GalleryAnime from "@/components/GalleryAnime";
import { posterJSON } from "@/globals/posterJSON";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const Posters = () => {
  const [liveBanner, setLiveBanner] = useState(true);
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
      <Head>
        <title>Order your Posters!</title>
        <meta property="og:url" content="your url" />
        <meta property="og:title" content="Order your Posters!" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Select from our wide range of posters"
        />
        <meta property="og:image" content="/juac.png" />
      </Head>
      <div
        className={`w-full animate-blink bg-[#50C878] py-1 text-center text-sm text-black xs:text-base ${
          liveBanner ? "" : "hidden"
        }`}
      >
        <p>Pre-Orders Live! All posters 30% OFF!</p>
        <button
          className="absolute left-2 -top-1 cursor-pointer text-lg xs:top-0"
          onClick={() => setLiveBanner(false)}
        >
          x
        </button>
      </div>
      <div className="sticky inset-0 z-10 mr-44 flex w-full flex-col items-center justify-center self-start break-words bg-black/50 p-2 py-5 text-center text-yellow-400 backdrop-blur-lg md:flex-row md:items-center md:justify-evenly md:p-0 md:text-center">
        <p>
          Gloss(G): (A3) (300+ gsm){" "}
          <span className="text-slate-400">
            <s>₹99</s>
          </span>
          <span className="text-emerald-400"> ₹69</span>
        </p>
        <p>
          Matte(M): (A3) (300+ gsm){" "}
          <span className="text-slate-400">
            <s>₹99</s>
          </span>
          <span className="text-emerald-400"> ₹69</span>
        </p>
        <p>
          WaterProof Matte(W): (A3) (225 micron){" "}
          <span className="text-slate-400">
            <s>₹169</s>
          </span>
          <span className="text-emerald-400"> ₹119</span>
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
          <li>1. Either completely made by us</li>
          <li>
            2. Or made from images/posters/wallpapers that are free to download
            and/or use
          </li>
          <li>
            3. Or made by any artist(s) whose permission is taken and credit is
            given properly
          </li>
        </ol>
      </p>
    </div>
  );
};

export default Posters;
