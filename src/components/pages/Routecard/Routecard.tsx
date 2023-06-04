// Imports
import Link from "next/link";
import Image from "next/image";

// Functions
const Routecard = () => (
  <section className="flex h-full w-full flex-col gap-4 rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-semibold">Routekaart</h2>
    <Link href="/location" className="h-full w-full">
      <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-black">
        <Image
          src="/img/map-placeholder.jpg"
          layout="fill"
          objectFit="cover"
          className="ease-inout rounded-2xl transition hover:opacity-50"
          alt="Placeholder"
        />
        <p className="text-lg font-semibold tracking-wider text-white">OPEN</p>
      </div>
    </Link>
  </section>
);

// Exports
export default Routecard;
