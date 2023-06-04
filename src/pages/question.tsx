// Imports
import { type NextPage } from "next";
import Navbar from "~/components/common/Navbar/Navbar";
import Sidebar from "~/components/common/Sidebar/Sidebar";
import Answers from "~/components/pages/Answer/AnswerList/AnswerList";
import QuestionDisplay from "~/components/pages/Question/QuestionDisplay/QuestionDisplay";
import QuestionSort from "~/components/pages/Question/QuestionSort/QuestionSort";
import Routecard from "~/components/pages/Routecard/Routecard";

// Functions
const Question: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex min-h-screen w-full flex-col gap-6 bg-gray-100 p-6">
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
