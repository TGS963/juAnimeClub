import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import TrendCard from "@/components/TrendCard";
import { Transition } from "@headlessui/react";
import BigCard from "@/components/BigCard";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  const [seasonalTop, setSeasonalTop] = useState([
    { id: 0, image: "/black.jpg", name: "", rating: "", mal: "" },
  ]);
  const [trending, setTrending] = useState([
    { id: 0, image: "/black.jpg", title: "", source: "" },
  ]);
  const [bigcard, setBigCard] = useState([
    {
      id: 0,
      image: "/black.jpg",
      title: "",
      desc: "",
      button: "",
    },
  ]);
  const getSeasonalTop = async () => {
    const stop = await fetch("/api/get-seasontop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    setSeasonalTop(await stop.json());
  };
  const getTrending = async () => {
    const trend = await fetch("/api/get-trending", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    setTrending(await trend.json());
  };
  const getBigCard = async () => {
    const bgc = await fetch("/api/get-bigcard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    console.log(bgc.json());
    //setBigCard(await bgc.json());
  };
  useEffect(() => {
    getBigCard();
    getSeasonalTop();
    getTrending();
  }, []);
  return (
    <div>
      <NavBar />
      <main className="flex h-full w-full flex-col items-center justify-center gap-10 px-14 py-6 text-center">
        {bigcard !== undefined ? (
          bigcard.map((x) => {
            return (
              <BigCard
                key={x.id}
                cardTitle={x.title}
                cardDesc={x.desc}
                cardImage={x.image}
                cardButton={x.button}
              />
            );
          })
        ) : (
          <BigCard
            cardTitle="Loading..."
            cardDesc="Loading..."
            cardImage="/black.jpg"
            cardButton="Loading..."
          />
        )}
        {/*TRENDING*/}
        <div className="flex h-3/4 w-full flex-col gap-6">
          <p className="p-6 text-4xl underline underline-offset-4">Trending</p>
          <div className="flex h-96 max-h-fit shrink-0 flex-row flex-nowrap gap-8 overflow-x-auto">
            {trending[0].image !== "null" ? (
              trending.map((x) => {
                return (
                  <TrendCard
                    key={x.id}
                    articleName={x.title}
                    articleSource={x.source}
                    articleImage={x.image}
                  />
                );
              })
            ) : (
              <TrendCard
                articleName="Loading..."
                articleSource="Loading..."
                articleImage="/black.jpg"
              />
            )}
          </div>
        </div>
        {/*RECOMMENDATIONS FOR THE SEASON*/}
        <div className="flex w-full flex-col gap-6">
          <p className="p-6 text-4xl underline underline-offset-4">
            Our Seasonal Top 3
          </p>
          <div className="flex h-fit flex-col gap-8 lg:flex-row">
            {seasonalTop[0].image !== "null" ? (
              seasonalTop.map((x) => {
                return (
                  <AnimeCard
                    key={x.id}
                    aniName={x.name}
                    aniDesc={x.rating}
                    aniImage={x.image}
                    aniMal={x.mal}
                  />
                );
              })
            ) : (
              <AnimeCard
                aniName="Loading..."
                aniDesc="Loading..."
                aniImage="/black.jpg"
                aniMal="www.google.com"
              />
            )}
          </div>
        </div>
        {/*WHAT WE DO*/}
        <p className="p-6 text-4xl underline underline-offset-4">What we do</p>

        <Card
          title="Events!"
          list={["Cosplay", "Food", "Music", "Games"]}
          image="event.jpg"
          color="#e03398"
          link="/events"
        />

        <CardReverse
          title="Merch!"
          list={["Posters", "Collectible Cards", "T-Shirts", "Bags"]}
          image="merch.jpg"
          color="#31d885"
          link="merch"
        />

        <Card
          title="Newsletter!"
          list={[
            "Anime Reviews",
            "Original Fanarts",
            "Insightful Articles",
            "Updates on the global Weeb Lore",
          ]}
          image="newsletter.jpg"
          color="#ff5d5d"
          link="newsletter"
        />

        <CardReverse
          title="Game Development!"
          list={["Original", "Tech Updates", "Production", "Fun!"]}
          image="gamedev.jpg"
          color="#f5dd56"
          link="gamedev"
        />

        {/*ABOUT US*/}
        <div className="flex flex-col gap-6 py-12">
          <p className="text-4xl">About Us</p>
          <p className="text-lg text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            consequatur accusantium placeat officia voluptates harum, nulla
            cupiditate ex delectus unde, doloremque quod. Consectetur
            consequatur, autem accusamus mollitia rem dolore adipisci? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nam alias, dolor
            maiores possimus porro eaque tempore sed vitae excepturi mollitia
            aspernatur dolorem? Dolores, dolore? Cupiditate impedit sunt natus
            commodi delectus.
          </p>
        </div>
      </main>
    </div>
  );
};

interface CardProps {
  title: string;
  list: string[];
  image: string;
  color: string;
  link: string;
}

export const Card = ({ title, list, image, color, link }: CardProps) => {
  return (
    <Link href={link}>
      <div className="group relative flex h-fit w-full cursor-pointer flex-col gap-6 rounded-xl text-black">
        <div
          style={{
            background: `linear-gradient(90deg, ${color} 0%, rgba(0,255,241,0) 100%)`,
          }}
          className={`flex flex-row justify-between rounded-xl p-6`}
        >
          <div className="flex flex-col items-start gap-6">
            <p className="text-6xl">{title}</p>
            {list.map((x) => {
              return (
                <p className="text-xl" key={x}>
                  - {x}
                </p>
              );
            })}
          </div>
          <Image
            className="-z-10 rounded-xl group-hover:scale-105"
            objectFit="cover"
            src={`/${image}`}
            layout="fill"
            alt="bg"
          />
        </div>
      </div>
    </Link>
  );
};

export const CardReverse = ({ title, list, image, color, link }: CardProps) => {
  return (
    <Link href={link}>
      <div className="group relative flex h-fit w-full cursor-pointer flex-col gap-6 rounded-xl text-black">
        <div
          style={{
            background: `linear-gradient(90deg, rgba(36,35,0,0) 0%, ${color} 100%)`,
          }}
          className={`flex flex-row justify-end rounded-xl p-6`}
        >
          <Image
            className="-z-10 rounded-xl group-hover:scale-105"
            objectFit="cover"
            src={`/${image}`}
            layout="fill"
            alt="bg"
          />
          <div className="flex flex-col items-end gap-6">
            <p className="text-6xl">{title}</p>
            {list.map((x) => {
              return (
                <p className="text-xl" key={x}>
                  {x} -
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Index;
