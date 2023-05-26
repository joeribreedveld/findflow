// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar/Sidebar";
import QuestionList from "~/components/pages/Question/QuestionList/QuestionList";
import QuizInfo from "~/components/pages/Quiz/QuizInfo/QuizInfo";
import Routecard from "~/components/pages/Routecard/Routecard";

// Functions
const Quiz: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex h-screen w-full bg-gray-100 p-6">
      <QuestionList />
      <div className="flex flex-col gap-6 pl-6">
        <QuizInfo />
        <Routecard />
      </div>
    </div>
  </div>
);

// Exports
export default Quiz;
