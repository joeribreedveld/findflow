// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar";
import QuizList from "~/components/quiz/QuizList/QuizList";

// Functions
const Home: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="h-screen w-full bg-gray-100">
      <QuizList />
    </div>
  </div>
);

// Exports
export default Home;
