import GalleryAnime from "@/components/GalleryAnime";
import Link from "next/link";

const Gallery = () => {
  const images = {
    myhero: [1, 2, 3],
    opm: [1, 2, 3, 4, 5, 6],
  };
  return (
    <div>
      {Object.keys(images).map((x) => {
        return (
          <div key={x}>
            <GalleryAnime />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
