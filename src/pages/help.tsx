// Imports
import { type NextPage } from "next";
import Sidebar from "~/components/common/Sidebar";
import Faq from "~/components/quiz/Faq";
import HelpContact from "~/components/quiz/HelpContact";

// Functions
const Help: NextPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex h-screen w-full flex-col gap-6 bg-gray-100 p-6">
      <Faq />
      <HelpContact />
    </div>
  </div>
);

// Exports
export default Help;
