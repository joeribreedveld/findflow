import Student from "./Student/Student";

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

export default StudentList;
