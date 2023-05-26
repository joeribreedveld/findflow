// Imports
import { type NextPage } from "next";
import Navbar from "~/components/common/Navbar/Navbar";
import Sidebar from "~/components/common/Sidebar/Sidebar";
import AnswerOption from "~/components/other/AnswerOption/AnswerOption";
import Answers from "~/components/other/Answer/Answers";
import QuestionDisplay from "~/components/question/QuestionDisplay/QuestionDisplay";
import QuestionSort from "~/components/question/QuestionSort/QuestionSort";
import Routecard from "~/components/other/Routecard/Routecard";

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
