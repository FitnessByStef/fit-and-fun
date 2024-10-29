import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import HomePage from './HomePage';
import PaymentModal from './components/payment/PaymentModal';
import PaymentForm from './components/payment/PaymentForm';


const stripePromise = loadStripe('ma_clé_publique');

const App: React.FC = () => {
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [amount, setAmount] = useState<number>(0);
  const openPaymentModal = () => setPaymentModalOpen(true);
  const closePaymentModal = () => setPaymentModalOpen(false);

    return (
        <>
        <Elements stripe={stripePromise}>
            <div className="App">
                <HomePage onOpenPaymentModal={openPaymentModal} onClosePaymentModal={closePaymentModal} handleAmount={setAmount} />
                <PaymentModal isOpen={isPaymentModalOpen} onClose={closePaymentModal}>
                    <h2>Écran de Paiement</h2>
                    <PaymentForm amount={amount} />
                </PaymentModal>
            </div>
        </Elements>
        </>

    );
};

export default App;
