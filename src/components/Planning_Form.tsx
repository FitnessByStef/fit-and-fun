import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
const Planning_Form: React.FC = () => {
    return (
       
            
        <Container className="mt-5">
            <h1 className="text-center mb-4">💥 Planning Studio Gris 💥</h1>
            <div className="text-center mb-4">
                <Button
                href="https://studio-gris.sportigo.fr/reservation/"
                target="_blank"
                className="custom-pink-btn"
                size="lg"
                >
                    📅 Réservation 📅
                </Button>
            </div>

            <Card className="p-4 shadow">
                <img src={'/medias/cours/Planning.jpg'} alt="Planning" className="banner-image" />
            </Card>
        </Container>

    );
};

export default Planning_Form;