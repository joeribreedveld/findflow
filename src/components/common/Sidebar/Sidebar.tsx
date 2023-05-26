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

// Functions
const Sidebar = () => {
  const router = useRouter();

  return (
    <nav className="flex min-h-screen min-w-[16rem] flex-col justify-between p-8">
      <section>
        <Link href="/">
          <h1 className="text-xl font-medium">Find Flow</h1>
        </Link>
      </section>
      <section>
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="/quiz">
              <button
                className={classNames(
                  "w-full rounded-2xl border-2 border-[#2B8585] px-4 py-4 text-left font-semibold text-[#2B8585]",
                  {
                    "bg-[#2B8585] text-white": router.pathname === "/quiz",
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
                    router.pathname === "/",
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
            <button className="w-full rounded-2xl px-4 py-4 text-left font-semibold text-[#808080]">
              <AiOutlineInfoCircle className="mr-4 inline-block text-2xl" />
              Over
            </button>
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