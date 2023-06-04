// Imports
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import {
  AiOutlinePlusCircle,
  AiOutlineCheckCircle,
  AiOutlineQuestionCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsTree } from "react-icons/bs";

// Functions
const Sidebar = () => {
  const router = useRouter();

  return (
    <nav className="flex h-screen min-w-[16rem] flex-col justify-between p-8">
      <section>
        <Link href="/" className="flex items-center">
          <BsTree className="mr-3 text-3xl text-[#2B8585]" />
          <h1 className="text-xl font-medium">Find Flow</h1>
        </Link>
      </section>
      <section>
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="/create-quiz">
              <button
                className={classNames(
                  "w-full rounded-2xl border-2 border-[#2B8585] px-4 py-4 text-left font-semibold text-[#2B8585]",
                  {
                    "bg-[#2B8585] text-white":
                      router.pathname === "/create-quiz",
                  }
                )}
              >
                <AiOutlinePlusCircle className="mr-4 inline-block text-2xl" />
                Creëer quiz
              </button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <button
                className={classNames("", {
                  "w-full rounded-2xl bg-[#F39D10] px-4 py-4 text-left font-semibold text-white":
                    router.pathname === "/" ||
                    router.pathname === "/quiz" ||
                    router.pathname === "/question" ||
                    router.pathname === "/result" ||
                    router.pathname === "/location",
                  "w-full rounded-2xl px-4 py-4 text-left font-semibold text-[#808080] ":
                    router.pathname !== "/",
                })}
              >
                <AiOutlineCheckCircle className="mr-4 inline-block text-2xl" />
                Quiz
              </button>
            </Link>
          </li>
          <li>
            <Link href="/help">
              <button
                className={classNames({
                  "w-full rounded-2xl bg-[#F39D10] px-4 py-4 text-left font-semibold text-white":
                    router.pathname === "/help",
                  "w-full rounded-2xl px-4 py-4 text-left font-semibold text-[#808080] ":
                    router.pathname !== "/help",
                })}
              >
                <AiOutlineQuestionCircle className="mr-4 inline-block text-2xl" />
                Help
              </button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button
                className={classNames({
                  "w-full rounded-2xl bg-[#F39D10] px-4 py-4 text-left font-semibold text-white":
                    router.pathname === "/about",
                  "w-full rounded-2xl px-4 py-4 text-left font-semibold text-[#808080] ":
                    router.pathname !== "/about",
                })}
              >
                <AiOutlineQuestionCircle className="mr-4 inline-block text-2xl" />
                Over
              </button>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <Link href="/login">
          <button className="w-full rounded-2xl bg-[#2B8585] px-4 py-4 text-left font-semibold text-white">
            <RiLogoutCircleLine className="mr-4 inline-block text-2xl" />
            Logout
          </button>
        </Link>
      </section>
    </nav>
  );
};

// Exports
export default Sidebar;
