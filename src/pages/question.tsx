// Imports
import { type NextPage } from "next";
import Navbar from "~/components/common/Navbar";
import Sidebar from "~/components/common/Sidebar";
import AnswerOption from "~/components/quiz/AnswerOption";
import Answers from "~/components/quiz/Answers";
import QuestionDisplay from "~/components/quiz/QuestionDisplay";
import QuestionSort from "~/components/quiz/QuestionSort";
import Routecard from "~/components/quiz/Routecard";

// Functions
const Question: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex h-screen w-full flex-col gap-6 bg-gray-100 p-6">
      <Navbar href="/quiz" />
      <div className="flex h-full flex-col gap-6">
        <QuestionDisplay />
        <section className="flex h-full gap-6">
          <Answers />
          <section className="flex h-full w-full flex-col gap-6">
            <QuestionSort />
            <Routecard />
          </section>
        </section>
      </div>
    </div>
  </div>
);

// Exports
export default Question;
