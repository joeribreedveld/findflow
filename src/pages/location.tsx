// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar";
import QuestionList from "~/components/quiz/QuestionList";
import QuizInfo from "~/components/quiz/QuizInfo";
import Routecard from "~/components/quiz/Routecard";

// Functions
const Location: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex h-screen w-full flex-col gap-6 bg-gray-100 p-6">
      <div className="h-full w-full rounded-2xl bg-gray-500"></div>
      <div className="flex gap-6">
        <QuizInfo />
        <div className="h-full w-full rounded-2xl bg-white p-8">
          <h2 className="mb-8 text-xl font-bold">Selecteer je locatie</h2>
          <p className="underline">Locatie bepalen</p>
          <p className="underline">locatie verwijderen</p>
        </div>
      </div>
    </div>
  </div>
);

// Exports
export default Location;
