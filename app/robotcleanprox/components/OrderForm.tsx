'use client';

import React, { useState, useEffect } from 'react';
import { PRODUCT_NAME, PRICE_PROMO, PRICE_LIST } from '../lib/constants';
import { ShieldCheck, ArrowRight, Clock } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    fullAddress: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  // Timer Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Check validation whenever formData changes
  useEffect(() => {
    const { fullName, phone, fullAddress } = formData;
    const isValid = 
      fullName.trim() !== '' &&
      phone.trim() !== '' &&
      fullAddress.trim() !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
        alert("Grazie! Il tuo ordine è stato ricevuto. Ti chiameremo a breve per confermare.");
        // Logic to send data to backend would go here
    }
  };

  return (
    <section id="order-form" className="py-10 px-4 bg-red-600">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* Urgency Ribbon */}
        <div className="absolute top-0 right-0 bg-yellow-400 text-red-900 text-xs font-black px-3 py-1 rounded-bl-xl z-10">
            SCONTO -50% ATTIVO
        </div>

        {/* Form Header */}
        <div className="bg-gray-900 p-6 text-center text-white">
          <h3 className="text-2xl font-black uppercase tracking-wide">Modulo D'Ordine</h3>
          <p className="text-gray-300 text-sm mt-1">Compila per ricevere l'offerta</p>
        </div>

        {/* Product Recap */}
        <div className="p-4 bg-yellow-50 border-b border-gray-200 flex justify-between items-center">
            <div>
                <span className="font-bold text-gray-800 block">{PRODUCT_NAME} + Accessori</span>
                <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded">SPEDIZIONE GRATIS</span>
            </div>
            <div className="text-right">
                <span className="block text-gray-400 line-through text-sm">€{PRICE_LIST}</span>
                <span className="block text-red-600 font-black text-2xl">€{PRICE_PROMO.toString().replace('.', ',')}</span>
            </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-red-50 p-2 flex justify-center items-center gap-2 text-red-600 font-bold text-sm border-b border-red-100 animate-pulse">
            <Clock size={16} />
            <span>L'offerta scade tra: {formatTime(timeLeft)}</span>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Field 1: Name */}
          <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Nome e Cognome <span className="text-red-500">*</span></label>
              <input 
                required
                type="text" 
                name="fullName"
                placeholder="Es: Mario Rossi"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-green-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
              />
          </div>

          {/* Field 2: Phone */}
          <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Telefono (Cellulare) <span className="text-red-500">*</span></label>
              <input 
                required
                type="tel" 
                name="phone"
                placeholder="Es: 333 1234567"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-green-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
              />
          </div>

          {/* Field 3: Full Address (Merged) */}
          <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                  Indirizzo Completo <span className="text-red-500">*</span> <br/>
                  <span className="text-xs font-normal text-gray-500">(Via, Numero Civico, CAP, Città, Frazione)</span>
              </label>
              <textarea 
                required
                name="fullAddress"
                rows={3}
                placeholder="Es: Via Roma 10, 20100 Milano (MI)"
                value={formData.fullAddress}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-green-500 transition-colors resize-none bg-white text-gray-900 placeholder-gray-400"
              />
          </div>

          <div className="bg-gray-100 p-3 rounded text-sm text-gray-600 flex items-start gap-2">
            <ShieldCheck size={20} className="shrink-0 text-green-600" />
            <p>I tuoi dati sono al sicuro e verranno usati solo per la spedizione.</p>
          </div>

          <button 
            type="submit"
            disabled={!isFormValid}
            className={`w-full font-black text-xl py-4 rounded-xl shadow-xl transform transition flex justify-center items-center gap-2 border-b-4
                ${isFormValid 
                    ? 'bg-green-600 hover:bg-green-700 text-white border-green-800 active:scale-95 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed opacity-70'}
            `}
          >
            <span>CONFERMA ORDINE</span>
            <ArrowRight size={24} strokeWidth={3} />
          </button>
          
          {!isFormValid && (
              <p className="text-center text-xs text-red-500 font-bold">
                  Compila tutti i campi obbligatori per sbloccare il tasto.
              </p>
          )}
          
          <div className="text-center text-xs text-white/80 mt-2 font-medium">
             Pagamento alla consegna • Nessun anticipo
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;