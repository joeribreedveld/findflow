// Imports
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

// Functions
const HelpContact = () => (
  <section className="rounded-2xl bg-white p-8">
    <section className="pb-8">
      <h2 className="mb-8 text-xl font-bold">Help en contact</h2>
      <p>
        We vinden het belangrijk om in contact te blijven met onze bezoekers en
        klanten, daarom hebben we deze pagina gemaakt zodat u gemakkelijk met
        ons in contact kunt komen. Hieronder ons emailadress.
      </p>
    </section>
    <section className="border-t border-[#EEEEEE] pt-8">
      <ul className="flex gap-12">
        <li>
          <AiOutlineInstagram className="mr-4 inline-block text-2xl text-[#2B8585]" />
          @findflow
        </li>
        <li>
          <FiTwitter className="mr-4 inline-block text-2xl text-[#2B8585]" />
          @findflow
        </li>
        <li>
          <AiOutlineMail className="mr-4 inline-block text-2xl text-[#2B8585]" />
          contact@findflow.nl
        </li>
      </ul>
    </section>
  </section>
);

// Exports
export default HelpContact;
