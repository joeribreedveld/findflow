// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar/Sidebar";
import StudentList from "~/components/pages/Student/StudentList/StudentList";
import QuizInfo from "~/components/pages/Quiz/QuizInfo/QuizInfo";
import Leaderboard from "~/components/pages/Leaderboard/LeaderboardList/LeaderboardList";

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
