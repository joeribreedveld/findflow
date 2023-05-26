// Imports
import Link from "next/link";

// Functions
const Routecard = () => (
  <section className="flex h-full w-full flex-col gap-4 rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Routekaart</h2>
    <Link href="/location" className="h-full w-full">
      <div className="h-full w-full rounded-2xl bg-[url(/img/map-placeholder.jpg)] bg-cover bg-center"></div>
    </Link>
  </section>
);

// Exports
export default Routecard;
