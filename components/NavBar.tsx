import Link from "next/link";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-40 flex h-fit w-full flex-row items-center justify-between border-b border-yellow-500 bg-slate-900 bg-opacity-80 p-6 px-14 text-xl backdrop-blur-md">
      <p className="text-2xl">Jadavpur University Anime Club</p>
      <div className="flex flex-row justify-between gap-12">
        <Link href="/newsletter">
          <div className="cursor-pointer rounded-2xl bg-slate-900 p-4 hover:bg-yellow-300 hover:text-black">
            Newsletter
          </div>
        </Link>
        <Link href="/events">
          <div className="cursor-pointer rounded-2xl bg-slate-900 p-4 hover:bg-yellow-300 hover:text-black">
            Events
          </div>
        </Link>
        <Link href="/fanarts">
          <div className="cursor-pointer rounded-2xl bg-slate-900 p-4 hover:bg-yellow-300 hover:text-black">
            Fan Arts
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
