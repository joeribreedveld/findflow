import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

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
                  "w-full rounded-2xl border-2 border-[#2B8585] px-8 py-4 text-left font-semibold text-[#2B8585]",
                  {
                    "bg-[#2B8585] text-white": router.pathname === "/quiz",
                  }
                )}
              >
                Creëer quiz
              </button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <button
                className={classNames("", {
                  "w-full rounded-2xl border-2 border-[#F39D10] bg-[#F39D10] px-8 py-4 text-left font-semibold text-white":
                    router.pathname === "/",
                  "w-full rounded-2xl  border-2 border-[#F39D10] px-8 py-4 text-left font-semibold text-[#F39D10]":
                    router.pathname !== "/",
                })}
              >
                Quiz
              </button>
            </Link>
          </li>
          <li>
            <button className="w-full rounded-2xl px-8 py-4 text-left font-semibold text-[#808080]">
              Help
            </button>
          </li>
          <li>
            <button className="w-full rounded-2xl px-8 py-4 text-left font-semibold text-[#808080]">
              Over
            </button>
          </li>
        </ul>
      </section>
      <section>
        <button className="w-full rounded-2xl bg-[#2B8585] px-8 py-4 text-left font-semibold text-white">
          Logout
        </button>
      </section>
    </nav>
  );
};

export default Sidebar;
