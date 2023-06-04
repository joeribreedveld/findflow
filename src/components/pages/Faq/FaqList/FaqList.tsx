// Imports
import FaqListItem from "../FaqListItem/FaqListItem";

// Functions
const FaqList = () => {
  return (
    <section className="h-full rounded-2xl bg-white p-8">
      <h2 className="mb-8 text-xl font-semibold">Veelgestelde vragen</h2>
      <ul>
        <FaqListItem
          question="Wat is een wandelquiz?"
          answer="Een wandelquiz is een quiz die je kunt spelen terwijl je aan het wandelen bent. Het combineert de voordelen van een wandeling met leuke vragen en uitdagingen."
        />
        <FaqListItem
          question="Hoe werkt een wandelquiz?"
          answer="Tijdens een wandelquiz ontvang je vragen en uitdagingen die je kunt beantwoorden terwijl je geniet van de omgeving. Het is een leuke manier om je kennis te testen tijdens het wandelen."
        />
        <FaqListItem
          question="Kan ik een wandelquiz alleen spelen?"
          answer="Ja, absoluut! Je kunt een wandelquiz solo spelen, zodat je op je eigen tempo kunt wandelen en de vragen kunt beantwoorden. Het is ook mogelijk om met vrienden of familie te spelen voor extra plezier."
        />
        <FaqListItem
          question="Waar kan ik een wandelquiz vinden?"
          answer="Er zijn verschillende platforms en apps waar je wandelquizzen kunt vinden. Zoek online naar wandelquiz om beschikbare opties te ontdekken."
        />
        <FaqListItem
          question="Zijn er verschillende moeilijkheidsniveaus in een wandelquiz?"
          answer="Ja, veel wandelquizzen bieden verschillende moeilijkheidsniveaus. Je kunt kiezen uit makkelijke, gemiddelde of moeilijke vragen, afhankelijk van je kennisniveau en voorkeur."
        />
        <FaqListItem
          question="Heb ik een internetverbinding nodig tijdens het spelen van een wandelquiz?"
          answer="Dit kan variëren afhankelijk van de wandelquiz-app of -platform. Sommige apps hebben mogelijk een internetverbinding nodig om vragen en updates te laden, terwijl andere offline functionaliteit bieden. Controleer de vereisten van de specifieke quiz-app die je gebruikt."
        />
      </ul>
    </section>
  );
};

// Exports
export default FaqList;
