import React from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import '../HomePage.css';

const tarifs = [
  { categorie: "Cartes 10 séances danse + 1 gratuite", details: "10 séances + 1 gratuite", prix: "180€" },
  { categorie: "Fit&fun - Avec Engagement", details: "Engagement 6 mois", prix: "38€ par mois (engagement sur 6 mois)" },
  { categorie: "Fit&fun - Sans Engagement", details: "Sans Engagement", prix: "44€ pour 1 mois" },
  { categorie: "Cours à l'unité", details: "Cours à l'unité", prix: "18€" },
  { categorie: "Carte 5 Séances Fit&Fun", details: "5 Séances utilisables 2 mois", prix: "55€" },
  { categorie: "Abonnement Danse - 4 séances par mois", details: "4 cours de danses par mois", prix: "40€ par mois (engagement sur 10 mois)" },
  { categorie: "Cours d'essai gratuit", details: "1er cours gratuit", prix: "Offert" },
  { categorie: "Consultation en naturopathie", details: "Consultation en naturopathie", prix: "60€" },
  { categorie: "Fit & Aerien", details: "4 cours de Danses / mois, 4 cours de Fit&Fun / mois", prix: "55€ par mois (engagement sur 6 mois)" },
  { categorie: "FEDERATION FRANCAISE DE DANSE", details: "Adhésion 2025 à la fédération française de danse", prix: "24€" },
  { categorie: "Pole Dance - Aerien", details: "4 cours par mois", prix: "52€ par mois (engagement sur 6 mois)" },
  { categorie: "Pole Dance - Aerien 2", details: "6 cours de danses par mois", prix: "60€ par mois (engagement sur 6 mois)" }
];

const Offers_Form: React.FC = () => {   
    return (
        <div className="aproposform">
        <Container className="mt-5">
        <h1 className="text-center mb-4">💥 Tarifs Studio Gris 💥</h1>
        <div className="text-center mb-4">
            <Button
            href="https://studio-gris.sportigo.fr/offers/"
            target="_blank"
            size="lg"
            className="custom-pink-btn"
            >
            🎟️ Voir Nos Offres 🎟️
            </Button>
        </div>

        <Card className="p-4 shadow">
            <Table striped bordered hover responsive>
            <thead className="bg-dark text-white">
                <tr>
                <th>🛑 Catégorie</th>
                <th>📌 Détails</th>
                <th>💰 Tarif</th>
                </tr>
            </thead>
            <tbody>
                {tarifs.map((tarif, index) => (
                <tr key={index}>
                    <td>{tarif.categorie}</td>
                    <td>{tarif.details}</td>
                    <td className="fw-bold text-danger">{tarif.prix}</td>
                </tr>
                ))}
            </tbody>
            </Table>
        </Card>
        </Container>
        </div>
  );
}
export default Offers_Form;