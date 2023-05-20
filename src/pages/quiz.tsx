// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar";
import QuestionList from "~/components/quiz/QuestionList";

// Functions
const Quiz: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex h-screen w-full bg-gray-100 p-6">
      <QuestionList />
      <div>rechts</div>
    </div>
  </div>
);

// Exports
export default Quiz;
