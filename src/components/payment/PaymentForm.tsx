import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import './PaymentForm.css';

interface PaymentFormProps {
  amount: number; // Ajoutez la prop montant
}

const PaymentForm: React.FC<PaymentFormProps> = (props:PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      setMessage(error.message || 'Une erreur s\'est produite');
      setIsProcessing(false);
      return;
    }

    console.log('Payment Method ID:', paymentMethod.id);
    setMessage('Paiement réussi');
    setIsProcessing(false);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="payment-form">
      {currentStep === 0 && (
        <div>
          <h2>Comment ça marche</h2>
          <p>Explication du processus de paiement...</p>
          <button onClick={handleNext}>Suivant</button>
        </div>
      )}
      {currentStep === 1 && (
        <div>
          <h2>Formulaire de contact</h2>
          <form>
            <label>Nom</label>
            <input type="text" required />
            <label>Prénom</label>
            <input type="text" required />
            <label>Adresse</label>
            <input type="text" required />
            <label>Email</label>
            <input type="email" required />
            <label>Téléphone</label>
            <input type="tel" required />
          </form>
          <div className="button-container">
            <button onClick={handlePrevious}>Précédent</button>
            <button onClick={handleNext}>Suivant</button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <form onSubmit={handlePayment}>
          <h2>Paiement</h2>
          <p>Montant: {props.amount} €</p>
          <CardElement options={{ hidePostalCode: true }} />
          <div className="button-container">
            <button type="button" onClick={handlePrevious}>Précédent</button>
            <button type="submit" disabled={!stripe || isProcessing}>
              {isProcessing ? 'Traitement...' : 'Payer'}
            </button>
          </div>
          {message && <div>{message}</div>}
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
