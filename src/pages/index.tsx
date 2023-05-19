// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar";

// Functions
const Home: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="h-screen w-full bg-gray-100"></div>
  </div>
);

// Exports
export default Home;
