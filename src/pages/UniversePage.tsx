import { Link } from 'react-router-dom';
import { offersPath } from '../offers';
import '../styles/discovery.css';
import { coursePath, disciplines, groups } from '../studio';

export default function UniversePage({ fitness = false }: { fitness?: boolean }) {
  const group = groups[fitness ? 1 : 0];
  const category = fitness ? 'fitness' : 'danse-aerien';
  const courses = Object.entries(disciplines).filter(([key, course]) => course.group === group && key !== 'commerciale').map(([, course]) => course);

  return <div className="studio-container">
    <section className="page-heading">
      <h1>{fitness ? group : 'Aérien'}</h1>
      <p>{fitness ? 'Trois façons de bouger au Studio Gris à Thèze, du renforcement en musique au Cardio Boxing.' : 'Découvrez les disciplines aériennes du Studio Gris à Thèze, pour adultes et enfants.'}</p>
      <div className="button-row">
        <Link className="primary-button" to="/planning">Voir le planning</Link>
        <Link className="secondary-button" to={offersPath(category)}>Voir les offres</Link>
      </div>
    </section>
    <section className="studio-section course-discovery">
      <h2>Les disciplines</h2>
      <div className="course-discovery-grid">
        {courses.map(course => <Link className={'course-discovery-card course-discovery-card--' + course.slug} key={course.slug} to={coursePath(course.slug)}>
          <img src={course.image} alt="" loading="lazy" />
          <h3>{course.name}</h3>
        </Link>)}
      </div>
    </section>
  </div>;
}
