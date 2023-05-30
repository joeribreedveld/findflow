// Imports
import Link from "next/link";
import { AiOutlineShareAlt } from "react-icons/ai";
import Image from "next/image";

// Functions
const QuizListItem = ({ id, title, date, img }: TQuiz) => (
  <li className="h-full">
    <article className="flex h-full flex-col">
      <Link href="/quiz" className="h-full w-full">
        <section className="relative flex h-full items-center justify-center rounded-t-2xl hover:bg-black">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl hover:opacity-50"
            alt={title}
          />
          <p className="text-lg font-semibold tracking-wider text-white">
            EDIT
          </p>
        </section>
      </Link>
      <section className="flex flex-col gap-4 rounded-b-2xl bg-white px-8 py-6">
        <section className="flex h-full w-full justify-between gap-6">
          <h4 className="font-medium">{title}</h4>
          <Link href="/results" className="text-sm text-[#2B8585] underline">
            Resultaten
          </Link>
        </section>
        <section className="flex h-full justify-between">
          <p>{date}</p>
          <button>
            <AiOutlineShareAlt className="text-2xl" />
          </button>
        </section>
      </section>
    </article>
  </li>
);

// Exports
export default QuizListItem;
