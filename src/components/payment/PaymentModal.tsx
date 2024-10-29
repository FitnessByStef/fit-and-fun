import React from 'react';
import './PaymentModal.css';

interface PaymentModalProps {
    isOpen:boolean;
    onClose:()=>void;
    children:React.ReactNode;
}

const PaymentModal:React.FC<PaymentModalProps> = ({isOpen, onClose, children})=>{
    if(!isOpen) return null;
    return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default PaymentModal;