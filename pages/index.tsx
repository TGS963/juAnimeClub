import { useInView } from "react-intersection-observer";
import AnimeCard from "@/components/AnimeCard";
import TrendCard from "@/components/TrendCard";
import { Transition } from "@headlessui/react";
import BigCard from "@/components/BigCard";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useRef } from "react";

const Index = () => {
  const {
    ref: navRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.1,
  });

  const list = ["ass", "bruh"];
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-10 px-14 text-center">
      <NavBar />
      <BigCard />
      {/*TRENDING*/}
      <div className="flex h-3/4 w-full flex-col gap-6">
        <p className="p-6 text-4xl underline underline-offset-4">Trending</p>
        <div className="flex h-96 max-h-fit flex-row gap-8">
          <TrendCard
            articleName="Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiaisuru Hanashi Christmas Key Visual revealed! "
            articleDesc="Twitter: Anime Trending"
            articleImage="one"
          />
          <TrendCard
            articleName="'SPY x FAMILY' - Episode 24 Visual!"
            articleDesc="Twitter: Anime Trending"
            articleImage="two"
          />
          <TrendCard
            articleName="Hokkaido Gals Are Super Adorable! - Anime Teaser Visual!"
            articleDesc="Twitter: Anime Trending"
            articleImage="three"
          />
        </div>
      </div>
      {/*RECOMMENDATIONS FOR THE SEASON*/}
      <div className="flex w-full flex-col gap-6">
        <p className="p-6 text-4xl underline underline-offset-4">
          Our Seasonal Top 3
        </p>
        <div className="flex h-fit flex-row gap-8">
          <AnimeCard
            aniName="Bocchi the Rock"
            aniDesc="9/10"
            aniImage="bocchi"
          />
          <AnimeCard
            aniName="Chainsaw Man"
            aniDesc="9/10"
            aniImage="chainsawman"
          />
          <AnimeCard
            aniName="Eminence in Shadow"
            aniDesc="8.5/10"
            aniImage="shadow"
          />
        </div>
      </div>
      {/*WHAT WE DO*/}
      <p className="p-6 text-4xl underline underline-offset-4">What we do</p>
      <Card
        title="Events!"
        list={["Cosplay", "Food", "Music", "Games"]}
        image="event.jpg"
      />
      <CardReverse
        title="Merch!"
        list={["Posters", "Collectible Cards", "T-Shirts", "Bags"]}
        image="merch.jpg"
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
      />
      <CardReverse
        title="Game Development!"
        list={["Original", "Tech Updates", "Production", "Fun!"]}
        image="gamedev.jpg"
      />

      {/*ABOUT US*/}
      <div className="flex flex-col gap-6 py-12">
        <p className="text-4xl">About Us</p>
        <p className="text-lg text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          consequatur accusantium placeat officia voluptates harum, nulla
          cupiditate ex delectus unde, doloremque quod. Consectetur consequatur,
          autem accusamus mollitia rem dolore adipisci? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nam alias, dolor maiores possimus
          porro eaque tempore sed vitae excepturi mollitia aspernatur dolorem?
          Dolores, dolore? Cupiditate impedit sunt natus commodi delectus.
        </p>
      </div>
    </main>
  );
};

interface CardProps {
  title: string;
  list: string[];
  image: string;
}

export const Card = ({ title, list, image }: CardProps) => {
  return (
    <div className="relative flex h-fit w-full flex-col gap-6 rounded-xl text-black">
      <div className="flex flex-row justify-between rounded-xl bg-gradient-to-r from-yellow-400 to-transparent p-6">
        <div className="flex flex-col items-start gap-6">
          <p className="text-6xl">{title}</p>
          {list.map((x) => {
            return <p key={x}>- {x}</p>;
          })}
        </div>
        <Image
          className="-z-10 rounded-xl"
          objectFit="cover"
          src={`/${image}`}
          layout="fill"
          alt="bg"
        />
      </div>
    </div>
  );
};

export const CardReverse = ({ title, list, image }: CardProps) => {
  return (
    <div className="relative flex h-fit w-full flex-col gap-6 rounded-xl text-black">
      <div className="flex flex-row justify-end rounded-xl bg-gradient-to-l from-yellow-400 to-transparent p-6">
        <Image
          className="-z-10 rounded-xl"
          objectFit="cover"
          src={`/${image}`}
          layout="fill"
          alt="bg"
        />
        <div className="flex flex-col items-end gap-6">
          <p className="text-6xl">{title}</p>
          {list.map((x) => {
            return <p key={x}>{x} -</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
