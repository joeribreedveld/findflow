// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar/Sidebar";

// Functions
const About: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex h-screen w-full bg-gray-100 p-6">
      Page under construction
    </div>
  </div>
);

// Exports
export default About;
