import GalleryAnime from "@/components/GalleryAnime";
import { useEffect, useState } from "react";
import Link from "next/link";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      id: 0,
      name: "Kaguya Sama",
      gallery: [
        {
          id: 0,
          code: "KAGUYA-1",
          image:
            "https://lh3.googleusercontent.com/pw/AL9nZEVSH-ERT0GZSrVagUzL6nLWdTsAaof2qi1K_Txsyr0bn_gggN0kjTIgpmAuelW626vgerLXZKatp-jwzWlfbsU6b99KOSKRayuVIwftz3h2idsJa49kkN0K13bj_K9LiolRYA5jkiXyK73VxAtYzS0=w876-h657-no?authuser=0",
        },
      ],
    },
    {
      id: 1,
      name: "Marvel",
      gallery: [
        {
          id: 0,
          code: "MARVEL-1",
          image:
            "https://lh3.googleusercontent.com/pw/AL9nZEU59muI_knss_e3r1FcADuxfD7XYyYN50Zo6vF2TzGrMuCScbIHN0TQbcxDwf_mtMLq0eIwFFtj5wKpwFLptwQswvyM153gwKhyh5-MmY-w_5I5owrPiffX4VNDJxwm7doJHVIrT7MofApt1K3sT3U=w876-h657-no?authuser=0",
        },
      ],
    },
    {
      id: 1,
      name: "Perfect Blue",
      gallery: [
        {
          id: 0,
          code: "PB-1",
          image:
            "https://lh3.googleusercontent.com/pw/AL9nZEWSpH4oH7Y9KwcOuZzddK7JbSktWGsNLS1FXRpciTACDIGtFCSaj55nnmZKsFkUCIgWREeKpSAVoAcg9N76sgBa47BHUgmPr37vTk-_M4wISx5BJA7qJ68o78_V0vtaTvHyvnR6Z_b_0HJK7WNqzFs=w876-h657-no?authuser=0",
        },
      ],
    },
    {
      id: 1,
      name: "Howl's Moving Castle",
      gallery: [
        {
          id: 0,
          code: "HMC-1",
          image:
            "https://lh3.googleusercontent.com/pw/AL9nZEUUZm7ubDKZETNwrlGTRow_YJhAI2R0LMOxdjAMG00Q2W2Ti0SVGZ-PtBAcUBwY9u-u79jmzZbQRu8bQUHFloc5d0OqUifFQQAc5QvvRPvM1bUvv78wTZ-AGo6H_RUi3DktA5JqToRISSgAgSU7ruI=w876-h657-no?authuser=0",
        },
      ],
    },
    {
      id: 1,
      name: "Spirited Away",
      gallery: [
        {
          id: 0,
          code: "SA-1",
          image:
            "https://lh3.googleusercontent.com/pw/AL9nZEX_wpI-9It2xtWqezaw_ESSJfknTvI-L880jelYUDSJhzOf_rXlE1wEnGSK_SRP_0cBVlx0zFU8tTIXNjSjyO1P4Y_jUfF2bjxfU7tn87woDXsTorbUh3lfTfrTnketAJZcunaJrAYjqZtupBL29UA=w876-h657-no?authuser=0",
        },
        {
          id: 1,
          code: "SA-2",
          image:
            "https://lh3.googleusercontent.com/pw/AL9nZEWT--dMexV6aOQlvTFTdkn6cjX4AXzq8mNCtcXaPQqDrduc7V6pgFcMBKsWko46WkvQ6Q25Ym4lOaGSSmynBijiCl8KEi0dVe8UY0HXBKEAALHvH8DMJY-NUKbt1zmpepc82pud5Q3vjkFLNYLcW0U=w876-h657-no?authuser=0",
        },
      ],
    },
    {
      id: 1,
      name: "Marvel",
      gallery: [
        {
          id: 0,
          code: "MARVEL-1",
          image:
            "https://lh3.googleusercontent.com/pw/AL9nZEU59muI_knss_e3r1FcADuxfD7XYyYN50Zo6vF2TzGrMuCScbIHN0TQbcxDwf_mtMLq0eIwFFtj5wKpwFLptwQswvyM153gwKhyh5-MmY-w_5I5owrPiffX4VNDJxwm7doJHVIrT7MofApt1K3sT3U=w876-h657-no?authuser=0",
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
    <div onLoad={getImages} className="flex flex-col justify-center">
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
