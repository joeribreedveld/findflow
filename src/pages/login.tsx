// Imports
import { type NextPage } from "next";
import Link from "next/link";

// Functions
const Login: NextPage = () => (
  <div className="flex h-screen items-center justify-center bg-[url(/img/map-placeholder.jpg)]">
    <section className="flex flex-col items-center rounded-2xl bg-white p-16">
      <h1 className="mb-4 text-2xl font-medium">Find Flow</h1>
      <p>Login voor docenten</p>
      <form className="mt-8 flex w-[22rem] flex-col gap-4">
        <label htmlFor="email">E-mailadres</label>
        <input
          className="rounded border p-4 "
          type="text"
          placeholder="email@gmail.com"
        />
        <label htmlFor="password">Wachtwoord (8+ tekens)*</label>
        <input
          className="rounded border p-4 "
          type="password"
          placeholder="Wachtwoord"
        />
        <Link href="/">
          <button className="mt-8 w-full rounded bg-[#2B8585] py-4 text-white">
            Login
          </button>
        </Link>
      </form>
    </section>
  </div>
);

// Exports
export default Login;
