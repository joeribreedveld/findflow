// Imports
import { type NextPage } from "next";
import Navbar from "~/components/common/Navbar/Navbar";
import Sidebar from "~/components/common/Sidebar/Sidebar";
import QuizInfo from "~/components/pages/Quiz/QuizInfoList/QuizInfoList";

// Functions
const Location: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex min-h-screen w-full flex-col gap-6 bg-gray-100 p-6">
      <Navbar href="/quiz" />
      <div className="h-full w-full rounded-2xl bg-[url(/img/map-placeholder.jpg)] bg-cover bg-center"></div>
      <div className="flex gap-6">
        <QuizInfo />
        <div className="h-full w-full rounded-2xl bg-white p-8">
          <h2 className="mb-8 text-xl font-semibold">Selecteer je locatie</h2>
          <p className="underline">Locatie bepalen</p>
          <p className="underline">locatie verwijderen</p>
        </div>
      </div>
    </div>
  </div>
);

// Exports
export default Location;
