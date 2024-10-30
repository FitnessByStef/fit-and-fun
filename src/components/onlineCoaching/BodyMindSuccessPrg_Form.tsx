import { Button } from '@progress/kendo-react-buttons';
import React from 'react';

interface IProps {
    onOpenPaymentModal :()=> void;
    handleAmount : React.Dispatch<React.SetStateAction<number>>;
}

const BodyMindSuccessPrg_Form: React.FC<IProps> = (props:IProps) => {
    return (
        <div className="weightlossform">
            <h2 className="formheader">🏋🏼‍♀️ <span className="feature-pinkname">Mon coaching sur mesure</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/batiment/Salle_StudioGris.jpg'} alt="StudioGris" className="banner-image" />
                </div>
                <div className="feature-card" id="weightlossprg">
                    <p>
                    ✨ <span className="feature-pinkname">Votre corps, votre esprit, notre succès</span>
                        <br /><br />Révélez votre potentiel avec un coaching sur mesure
                        Chez Studio <span className="feature-pinkname">Gris</span>, nous croyons en un accompagnement sur mesure pour atteindre vos objectifs de forme, de bien-être et de développement personnel. 

                        <br /><br />Avec notre équipe <span className="feature-pinkname">d'experts</span>, nous combinons sport, nutrition, naturopathie, préparation mentale et danse pour créer un programme adapté à vos besoins et à votre rythme de vie.

                        <br /><br />Dès le premier rendez-vous, nous apprenons à vous connaître afin de concevoir un parcours motivant et <span className="feature-pinkname">personnalisé</span>.

                        <br />Nous mettons en place un plan global incluant un programme sportif, un suivi nutritionnel, des séances de relaxation et des techniques de préparation mentale.

                        <br /><br />Tous les deux mois, nous évaluons vos progrès pour ajuster votre programme et renforcer votre <span className="feature-pinkname">motivation</span>. 

                        <br /><br />Vous bénéficiez également d'un accès exclusif à notre Studio  pour explorer différentes disciplines comme la danse, le renforcement musculaire et le stretching.

                        <br /><br />Au Studio <span className="feature-pinkname">Gris</span>, c’est bien plus qu’un coaching : c’est un accompagnement vers votre transformation personnelle. 

                        <br /><span className="feature-pinkname">Rejoignez-nous pour des résultats concrets et durables</span>.
                    </p>

                    <Button className="cta-button" onClick={() => { props.handleAmount(200);
                                                                    props.onOpenPaymentModal()}}>Commencez votre transformation aujourd'hui !</Button>
                </div>

            </section>
        </div>
    );
};

export default BodyMindSuccessPrg_Form;