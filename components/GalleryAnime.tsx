import { Dialog, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { cartPrice } from "../globals/cartPrice";
import { randomInt, randomUUID } from "crypto";
import GalleryInfo from "./GalleryInfo";
import { useRecoilState } from "recoil";
import { cart } from "../globals/cart";
import toast from "react-hot-toast";
import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";

interface GalleryProps {
  aniName: string;
  numbers: any[];
}

const GalleryAnime = ({ aniName, numbers }: GalleryProps) => {
  const matte = 99;
  const gloss = 99;
  const waterproof = 169;
  const [cartItems, setCartItems] = useRecoilState(cart);
  const [price, setPrice] = useRecoilState(cartPrice);
  const [showInfo, setShowInfo] = useState(false);
  const addToCart = (posterCode: string, posterType: number) => {
    if (cartItems.some((item) => item.includes(posterCode))) {
      let tmp = Array.from(cartItems);
      let tmpCodeIndex = tmp.findIndex((code) => code.includes(posterCode));
      tmp[tmpCodeIndex] = tmp[tmpCodeIndex].replace(
        tmp[tmpCodeIndex]!.match(/\d+/)![0],
        JSON.stringify(parseInt(tmp[tmpCodeIndex]!.match(/\d+/)![0]) + 1)
      );
      console.log(tmp[tmpCodeIndex]);
      setCartItems(tmp);
    } else setCartItems([...cartItems, posterCode + "-1"]);
    setPrice((prevPrice) => prevPrice + posterType);
  };
  const removeFromCart = (posterCode: string, posterType: number) => {
    let tmp = Array.from(cartItems);
    let tmpCodeIndex = tmp.findIndex((code) => code.includes(posterCode));
    if (tmp[tmpCodeIndex] === undefined) return;
    if (tmp[tmpCodeIndex]!.match(/\d+/)![0] === "1")
      tmp.splice(tmpCodeIndex, 1);
    else
      tmp[tmpCodeIndex] = tmp[tmpCodeIndex].replace(
        tmp[tmpCodeIndex]!.match(/\d+/)![0],
        JSON.stringify(parseInt(tmp[tmpCodeIndex]!.match(/\d+/)![0]) - 1)
      );
    console.log(tmp[tmpCodeIndex]);
    setCartItems(tmp);
    setPrice((prevPrice) => prevPrice - posterType);
  };
  const onClose = (e: any) => {
    e.preventDefault();
    console.log("hiding modal");
    setShowInfo((prev) => !prev);
  };
  Modal.defaultStyles.overlay!.backgroundColor = "black";
  return (
    <>
      <div className="fixed top-0 -right-36 flex h-full w-44 animate-scale-in flex-col justify-center gap-5 border-l-2 border-emerald-500 bg-[#131313] p-5 text-yellow-400 hover:right-0 md:right-0">
        <p>Cart:</p>
        {cartItems.map((item) => (
          <p key={null}>{item}</p>
        ))}
        <button
          className="btn bg-green-400 text-black"
          onClick={() => {
            navigator.clipboard.writeText(cartItems.join());
            toast.success(
              "Order Copied to Clipboard, paste back in google forms",
              { duration: 5000 }
            );
          }}
        >
          Confirm: ₹{price}
        </button>
      </div>
      <p className="m-5 text-2xl underline">{aniName}</p>
      <div className="m-5 mr-44 flex flex-col flex-wrap justify-start gap-12 md:flex-row">
        {numbers.map((x) => {
          return (
            <div className="flex flex-col md:basis-1/3" key={x.id}>
              <div
                className={`group relative flex h-full w-full cursor-pointer flex-row overflow-hidden rounded-xl border-4 border-transparent duration-100 hover:border-cyan-200`}
                onClick={() => {
                  toast.custom("Press Esc, or click to exit", {
                    style: {
                      background: "black",
                    },
                  });
                  setShowInfo(!showInfo);
                }}
              >
                <Modal
                  isOpen={showInfo}
                  onRequestClose={onClose}
                  shouldCloseOnOverlayClick={true}
                >
                  <div className=" fixed inset-10 bg-black" onClick={onClose}>
                    <Image src={x.image} layout="fill" objectFit="scale-down" />
                  </div>
                </Modal>

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
                </div>
              </div>
              <div className="mr-4 flex w-full flex-row justify-between gap-5 rounded-b-xl border-b-2 border-b-yellow-500 bg-gradient-to-b from-black to-slate-500 p-5">
                <div className="shadow-md shadow-black">
                  <button
                    className="btn h-fit w-full rounded-md rounded-b-none bg-blue-400 py-1 text-start text-sm text-black"
                    onClick={() => {
                      addToCart(x.code + "-W", waterproof);
                    }}
                  >
                    W
                  </button>
                  <button
                    className="btn h-fit w-full rounded-md rounded-t-none bg-red-400 text-start text-sm text-black"
                    onClick={() => {
                      removeFromCart(x.code + "-W", waterproof);
                    }}
                  >
                    remove
                  </button>
                </div>
                <div className="shadow-md shadow-black">
                  <button
                    className="btn h-fit w-full rounded-md rounded-b-none bg-slate-400 py-1 text-start text-sm text-black"
                    onClick={() => {
                      addToCart(x.code + "-M", matte);
                    }}
                  >
                    M
                  </button>
                  <button
                    className="btn h-fit w-full rounded-md rounded-t-none bg-red-400 text-start text-sm text-black"
                    onClick={() => {
                      removeFromCart(x.code + "-M", matte);
                    }}
                  >
                    remove
                  </button>
                </div>
                <div className="shadow-md shadow-black">
                  <button
                    className="btn h-fit w-full rounded-md rounded-b-none bg-yellow-500 py-1 text-start text-sm text-black"
                    onClick={() => {
                      addToCart(x.code + "-G", gloss);
                    }}
                  >
                    G
                  </button>
                  <button
                    className="btn h-fit w-full rounded-md rounded-t-none bg-red-400 text-start text-sm text-black"
                    onClick={() => {
                      removeFromCart(x.code + "-G", gloss);
                    }}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryAnime;
