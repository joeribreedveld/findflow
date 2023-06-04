// Imports
import Link from "next/link";

// Functions
const Navbar = ({ href }: TNavbarProps) => (
  <nav className="flex items-center gap-6">
    <Link href={href}>
      <button className="rounded-2xl bg-[#2B8585] px-8 py-4 font-semibold text-white transition ease-in-out hover:brightness-90">
        Terug
      </button>
    </Link>
    <div className="w-full rounded-2xl bg-white py-4 text-center text-lg font-semibold">
      Quiz: Wie is Karel Appel
    </div>
    <Link href={href}>
      <button className="rounded-2xl bg-[#2B8585] px-8 py-4 font-semibold text-white transition ease-in-out hover:brightness-90">
        Opslaan
      </button>
    </Link>
  </nav>
);

// Exports
export default Navbar;
