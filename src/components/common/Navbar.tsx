import Link from "next/link";

type TNavbarProps = {
  href: string;
};

const Navbar = ({ href }: TNavbarProps) => (
  <nav className="flex items-center gap-6">
    <Link href={href}>
      <button className="rounded-2xl bg-[#2B8585] px-8 py-4 font-bold text-white">
        Terug
      </button>
    </Link>
    <div className="w-full rounded-2xl bg-white py-4 text-center text-lg font-bold">
      Quiz: Wie is Karel Appel
    </div>
    <Link href={href}>
      <button className="rounded-2xl bg-[#2B8585] px-8 py-4 font-bold text-white">
        Opslaan
      </button>
    </Link>
  </nav>
);

export default Navbar;
