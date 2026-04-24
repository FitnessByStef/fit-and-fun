import '../styles/about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="overline">Qui sommes-nous ?</p>
          <h1>Un studio de danse et de bien-être à Thèze</h1>
          <p>
            Un lieu de vie, de mouvement et de confiance, pensé pour prendre soin de soi
            et se reconnecter à son corps.
          </p>
        </div>

        <div className="about-hero__media">
          <img
            src="/medias/coachs/SophieMaylis.jpg"
            alt="Sophie et Maylis au Studio Gris"
          />
        </div>
      </section>

      <section className="about-section">
        <div className="about-text-card">
          <h2>Un studio de danse et de bien-être à Thèze</h2>

          <p>
            Il y a quelque temps, à <strong>Thèze</strong>, nous avons uni notre énergie
            et notre vision commune pour créer un <strong>studio de danse et de bien-être</strong>
            pensé comme un véritable lieu de vie.
          </p>

          <p>
            Un espace qui inspire, qui invite à prendre soin de soi et à se reconnecter
            à son corps.
          </p>

          <p>
            Notre studio à Thèze est bien plus qu’un simple espace d’entraînement.
          </p>

          <p>
            C’est un <strong>lieu d’expression, de mouvement, d’échange et de confiance</strong>,
            dédié aux femmes et à toutes les personnes souhaitant évoluer dans un cadre
            bienveillant et motivant.
          </p>
        </div>
      </section>

      <section className="about-section about-grid">
        <article className="about-profile-card">
          <p className="about-profile-label">Maylis — à droite</p>
          <h2>Maylis, enseignante danse à Thèze</h2>

          <p>
            Passionnée de danse depuis son plus jeune âge, <strong>Maylis</strong> a fait
            de cet art son métier.
          </p>

          <p>
            Enseignante depuis plus de <strong>10 ans</strong>, elle transmet son savoir-faire
            et sa passion au sein de notre <strong>studio de danse à Thèze</strong>, à travers
            des disciplines originales et complémentaires telles que :
          </p>

          <ul>
            <li>le cerceau aérien</li>
            <li>la pole dance</li>
            <li>le stretching</li>
          </ul>

          <p>
            À travers ces pratiques, Maylis permet à chacun de <strong>libérer les énergies</strong>,
            de développer sa créativité et de s’exprimer librement par le mouvement.
          </p>

          <p>
            Son enseignement allie technique, écoute et expression corporelle, dans une
            approche accessible et évolutive.
          </p>
        </article>

        <article className="about-profile-card">
          <p className="about-profile-label">Sophie — à gauche</p>
          <h2>Sophie, bien-être et mouvement à Thèze</h2>

          <p>
            De son côté, <strong>Sophie</strong>, thérapeute spécialisée dans le
            <strong> bien-être</strong>, place le mouvement au cœur d’une vie épanouie
            et en bonne santé.
          </p>

          <p>
            Pour elle, bouger chaque jour ne se limite pas à une activité physique :
            c’est un <strong>outil d’équilibre mental, émotionnel et corporel</strong>.
          </p>

          <p>
            Au sein du studio à Thèze, Sophie apporte une dimension plus profonde au projet,
            en reliant le sport à une <strong>véritable philosophie du bien-être</strong>,
            où le corps et l’esprit avancent en harmonie.
          </p>

          <p>
            Son approche complète l’offre du studio en donnant du sens au mouvement et
            à la pratique sportive.
          </p>
        </article>
      </section>

      <section className="about-section">
        <div className="about-final-card">
          <h2>Un lieu unique à Thèze, Le Studio Gris</h2>
          <p>
            Notre studio de danse et de sport à Thèze est né de cette complémentarité :
            la danse, le mouvement, la conscience du corps et le bien-être réunis dans
            un même espace.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;