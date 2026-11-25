import { disciplines } from '../studio';

export default function CommercialDancePage() {
  const course = disciplines.commerciale;
  return <div className="studio-container">
    <section className="event-hero commercial-hero">
      <div className="page-heading">
        <h1>{course.name}</h1>
        <p>Travaillez la musicalité, l’expression et la confiance en vous à travers des chorégraphies. Sarah vous accompagne à votre rythme, dans une ambiance chaleureuse.</p>
      </div>
      <img src={course.image} width="1284" height="1258" alt="Sarah – Danse commerciale" />
    </section>
  </div>;
}
