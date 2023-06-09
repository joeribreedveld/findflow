// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar/Sidebar";
import QuizList from "~/components/pages/Quiz/QuizList/QuizList";

// Functions
const Home: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="min-h-screen w-full bg-gray-100">
      <QuizList />
    </div>
  </div>
);

// Exports
export default Home;
