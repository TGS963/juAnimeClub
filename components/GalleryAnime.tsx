import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cart } from "../globals/cart";
import Image from "next/image";
import Link from "next/link";

interface GalleryProps {
  aniName: string;
  numbers: any[];
}

const GalleryAnime = ({ aniName, numbers }: GalleryProps) => {
  const [cartItems, setCartItems] = useRecoilState(cart);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <>
      <div className="fixed top-0 right-0 h-full w-44 bg-white">
        {cartItems.map((x) => {
          return <p>x</p>;
        })}
      </div>
      <p>{aniName}</p>
      {numbers.map((x) => {
        return (
          <div
            key={x.id}
            className={`group relative flex h-fit w-full basis-1/3 cursor-pointer flex-row overflow-hidden rounded-xl border-4 border-transparent duration-100 hover:border-cyan-200`}
            onClick={() => {
              if (cartItems.includes(x.code)) {
                let tmp = Array.from(cartItems);
                tmp.splice(cartItems.indexOf(x.code), 1);
                setCartItems(tmp);
                return;
              }
              setCartItems([...cartItems, x.code]);
            }}
          >
            <div className="absolute h-full w-1/2 -translate-y-1/4 -translate-x-2/4 rotate-12 -skew-y-12 bg-gradient-to-t from-transparent to-slate-200 opacity-30 group-hover:w-3/4" />
            <Image
              className="-z-10 rounded-xl group-hover:scale-110"
              objectFit="cover"
              src={x.image}
              layout="fill"
              alt="bg"
            />
            <div className="flex h-56 w-full flex-row items-end justify-between rounded-xl bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-2xl">{x.code}</p>
              <p className="max-w-1/2 text-start text-lg">place</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GalleryAnime;
