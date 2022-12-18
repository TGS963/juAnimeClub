import Link from "next/link";

const NavBar = () => {
  return (
    <div className="static top-0 z-40 flex h-fit w-screen flex-row items-center justify-between border-b border-yellow-500 bg-slate-900 bg-opacity-80 p-6 px-14 text-xl backdrop-blur-md">
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
      <div className="search">
        <input
          className="text-md rounded-xl border-2 border-transparent bg-slate-800 p-2 text-slate-400 focus:border-slate-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default NavBar;
