import Link from "next/link";

const Routecard = () => (
  <section className="flex h-full w-full flex-col gap-4 rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Routekaart</h2>
    <Link href="/location" className="h-full w-full">
      <div className="h-full w-full rounded-2xl bg-[#eee]"></div>
    </Link>
  </section>
);

export default Routecard;
