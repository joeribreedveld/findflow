import Student from "../StudentListItem/StudentListItem";

// Functions
const StudentList = () => (
  <section className="w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-semibold">Resultaten</h2>
    <div className="mb-8 flex justify-between font-semibold">
      <p>Leerling</p>
      <p>Score</p>
    </div>
    <ul className="flex flex-col gap-4">
      <Student
        img="/img/student-1.jpg"
        name="Gerda Reelman"
        score="10/20"
        variant="selected"
      />
      <Student img="/img/student-2.jpg" name="Pieter Jong" score="11/20" />
      <Student img="/img/student-3.jpg" name="Jan Man" score="4/20" />
      <Student img="/img/student-4.jpg" name="Koek Dik" score="17/20" />
      <Student img="/img/student-5.jpg" name="Gert Hak" score="20/20" />
      <Student img="/img/student-6.jpg" name="Peter Pannekoek" score="14/20" />
      <Student img="/img/student-7.jpg" name="Piet Hein" score="5/20" />
      <Student img="/img/student-8.jpg" name="Frank Bru" score="11/20" />
    </ul>
  </section>
);

// Exports
export default StudentList;
