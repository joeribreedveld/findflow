import Link from "next/link";

const Sidebar = () => (
  <nav className="flex min-h-screen min-w-[16rem] flex-col justify-between p-8">
    <section>
      <h1 className="text-xl font-medium">Find Flow</h1>
    </section>
    <section>
      <ul className="flex flex-col gap-6">
        <li>
          <Link href="/quiz">
            <button className="w-full rounded-2xl border-2 border-[#2B8585] px-8 py-4 text-left font-semibold text-[#2B8585]">
              Creëer quiz
            </button>
          </Link>
        </li>
        <li>
          <button className="w-full rounded-2xl bg-[#F39D10] px-8 py-4 text-left font-semibold text-white">
            Quiz
          </button>
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

export default Sidebar;
