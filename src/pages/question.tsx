// Imports
import { type NextPage } from "next";
import Navbar from "~/components/common/Navbar";
import Sidebar from "~/components/common/Sidebar";
import Routecard from "~/components/quiz/Routecard";

// Functions
const Question: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex h-screen w-full flex-col gap-6 bg-gray-100 p-6">
      <Navbar href="/quiz" />
      <div className="flex h-full flex-col gap-6">
        <section className="flex h-[50vh] items-center justify-center rounded-2xl bg-white p-8">
          <h2 className="text-xl font-bold">1. Hoe oud is Karel Appel?</h2>
        </section>
        <section className="flex h-full gap-6">
          <section className="w-full rounded-2xl bg-white p-8">
            <h2 className="mb-8 text-xl font-bold">Antwoorden</h2>
          </section>
          <section className="flex w-full flex-col gap-6">
            <section className="rounded-2xl bg-white p-8">
              <h2 className="mb-8 text-xl font-bold">Vraag soort</h2>
              <div className="flex gap-6">
                <button className="w-full rounded-2xl bg-[#F39D10] py-6 text-lg font-bold text-white">
                  Meerkeuze
                </button>
                <button className="w-full rounded-2xl bg-[#eee] py-6 text-lg">
                  Open
                </button>
              </div>
            </section>
            <Routecard />
          </section>
        </section>
      </div>
    </div>
  </div>
);

// Exports
export default Question;
