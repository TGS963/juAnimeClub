import Link from "next/link";

const Merch = () => {
  return (
    <div>
      <p>Merch</p>
      <Link href="/merch/posters" className="cursor-pointer select-none">
        <p className="cursor-pointer select-none">1. Posters</p>
      </Link>
    </div>
  );
};

export default Merch;
