import classNames from "classnames";

type TStudentProps = {
  variant?: "selected";
};

const StudentList = () => (
  <section className="w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Resultaten</h2>
    <div className="mb-8 flex justify-between font-bold">
      <p>Leerling</p>
      <p>Score</p>
    </div>
    <ul className="flex flex-col gap-4">
      <Student variant="selected" />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
    </ul>
  </section>
);

const Student = ({ variant }: TStudentProps) => (
  <li
    className={classNames(
      "flex items-center justify-between rounded-2xl px-6 py-4",
      {
        "bg-[#eee]": variant === "selected",
      }
    )}
  >
    <div className="flex items-center gap-4">
      <div className="h-[40px] w-[40px] rounded-full bg-gray-500"></div>
      <p>Student naam</p>
    </div>
    <div className="flex items-center gap-4">
      <p>14/20</p>
    </div>
  </li>
);

export default StudentList;
