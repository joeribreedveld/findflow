// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar";
import StudentList from "~/components/quiz/StudentList";
import QuizInfo from "~/components/quiz/QuizInfo";
import Leaderboard from "~/components/quiz/Leaderboard";

// Functions
const Results: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex h-screen w-full bg-gray-100 p-6">
      <StudentList />
      <div className="flex flex-col gap-6 pl-6">
        <QuizInfo />
        <Leaderboard />
      </div>
    </div>
  </div>
);

// Exports
export default Results;