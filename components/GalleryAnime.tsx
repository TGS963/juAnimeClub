import { Dialog, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { cartPrice } from "../globals/cartPrice";
import Router, { useRouter } from "next/router";
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
  const router = useRouter();

  const matte = 99;
  const gloss = 99;
  const waterproof = 169;
  interface posterTypesInterface {
    M: number;
    G: number;
    W: number;
  }
  const posterTypes: posterTypesInterface = {
    M: 69,
    G: 69,
    W: 99,
  };
  const [cartItems, setCartItems] = useRecoilState(cart);
  const [price, setPrice] = useRecoilState(cartPrice);
  const [showInfo, setShowInfo] = useState(-1);
  const [cartShow, setCartShow] = useState(false);
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
    toast.success("Added to Cart", {
      duration: 1000,
    });
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
  function getNo(posterCode: string) {
    let tmp = Array.from(cartItems);
    let tmpCodeIndex = tmp.findIndex((code) => code.includes(posterCode));
    if (tmp[tmpCodeIndex] === undefined) return null;
    return tmp[tmpCodeIndex]!.match(/\d+/)![0];
  }
  const onClose = (e: any) => {
    e.preventDefault();
    console.log("hiding modal");
    setShowInfo((prev) => -1);
  };
  Modal.defaultStyles.overlay!.backgroundColor = "black";
  Modal.setAppElement("#main");

  return (
    <>
      <div
        id="main"
        className={`fixed top-0 z-20 flex h-full w-44 animate-scale-in flex-col justify-center gap-5 border-l-2 border-emerald-500 bg-[#131313] p-5 text-yellow-400 ${
          cartShow ? "right-0" : "-right-44"
        } md:right-0 md:animate-none`}
      >
        <div
          className="group absolute -left-4 flex h-36 w-4 cursor-pointer items-center justify-center rounded-l-xl bg-emerald-500 shadow-md shadow-black xs:-left-8 xs:h-44 xs:w-8 md:hidden"
          onClick={() => setCartShow((prev) => !prev)}
        >
          <p className="-rotate-90 pb-1 text-sm text-black xs:pb-2 xs:text-lg">
            Cart
          </p>
        </div>
        <p>Cart:</p>
        {cartItems.map((item) => (
          <p
            key={null}
            className="cursor-pointer select-none text-sm text-white"
            onClick={() => {
              removeFromCart(
                item.substring(0, item.indexOf("-", item.indexOf("-") + 1)),
                posterTypes[
                  item[
                    item.indexOf("-", item.indexOf("-") + 1) + 1
                  ] as keyof posterTypesInterface
                ]
              );
              toast.error("Removed item from cart", {
                duration: 1000,
              });
            }}
          >
            {item}{" "}
            <b>
              <span className="text-xl text-red-500">-</span>
            </b>
          </p>
        ))}
        <a
          target="_blank"
          href={
            `https://docs.google.com/forms/d/e/1FAIpQLSc9aSUr6TaIoSXV8r1yrcjcxb8TAaeyRmkt7DFG5Mb_PCyz7w/viewform?usp=pp_url&entry.2043637913=` +
            cartItems.join()
          }
          rel="noopener noreferrer"
        >
          <button
            className="btn rounded-xl bg-green-400 text-black"
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
        </a>
        <button
          className="btn rounded-xl bg-slate-400 text-black"
          onClick={() => {
            setCartItems([]);
            setPrice(0);
          }}
        >
          Reset
        </button>
      </div>
      <p className="my-5 text-2xl underline">{aniName}</p>
      <div className="mr-44 flex w-full flex-col flex-wrap justify-start gap-12 md:flex-row">
        {numbers.map((x) => {
          return (
            <div className="flex w-full flex-col md:basis-1/3" key={x.id}>
              <div
                className={`group relative flex h-full w-full cursor-pointer flex-row overflow-hidden rounded-xl border-4 border-transparent duration-100 hover:border-cyan-200`}
                onClick={() => {
                  if (showInfo !== -1) setShowInfo(-1);
                  else {
                    setShowInfo(x.id);
                    toast.custom("Press Esc, or click to exit", {
                      duration: 700,
                      style: {
                        background: "black",
                      },
                      position: "bottom-center",
                    });
                  }
                }}
              >
                <Modal
                  isOpen={showInfo === x.id ? true : false}
                  onRequestClose={onClose}
                  shouldCloseOnOverlayClick={true}
                >
                  <div className="fixed inset-0 bg-black" onClick={onClose}>
                    <Image
                      src={x.image}
                      layout="fill"
                      objectFit="scale-down"
                      alt="poster"
                    />
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
              <div className="h-fit w-full border-4 border-y-0 border-transparent">
                <p className="border-2 border-y-0 border-black bg-emerald-500 py-1 px-2 text-xs shadow-md shadow-black xs:text-lg">
                  Add to Cart:
                </p>
              </div>
              <div className="mr-4 flex w-full flex-row flex-wrap justify-between rounded-b-xl border-4 border-t-0 border-transparent text-xs sm:text-lg">
                <div className="h-full w-1/3 border-2 border-r-0 border-black">
                  <button
                    className="btn h-full w-full min-w-fit rounded-md rounded-t-none rounded-r-none bg-blue-400 py-1 text-start text-xs text-black xs:text-lg"
                    onClick={() => {
                      addToCart(x.code + "-W", posterTypes.W);
                    }}
                  >
                    W
                    {getNo(x.code + "-W") === null
                      ? ""
                      : `:x` + getNo(x.code + "-W")}
                  </button>
                </div>
                <div className="h-full w-1/3 border-2 border-black">
                  <button
                    className="btn h-full w-full min-w-fit rounded-md rounded-l-none rounded-r-none rounded-t-none bg-slate-400 py-1 text-start text-xs text-black xs:text-lg"
                    onClick={() => {
                      addToCart(x.code + "-M", posterTypes.M);
                    }}
                  >
                    M
                    {getNo(x.code + "-M") === null
                      ? ""
                      : `:x` + getNo(x.code + "-M")}
                  </button>
                </div>
                <div className="h-full w-1/3 border-2 border-l-0 border-black">
                  <button
                    className="btn h-full w-full min-w-fit rounded-md rounded-t-none rounded-l-none bg-yellow-500 py-1  text-start text-xs text-black xs:text-lg"
                    onClick={() => {
                      addToCart(x.code + "-G", posterTypes.G);
                    }}
                  >
                    G
                    {getNo(x.code + "-G") === null
                      ? ""
                      : `:x` + getNo(x.code + "-G")}
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
