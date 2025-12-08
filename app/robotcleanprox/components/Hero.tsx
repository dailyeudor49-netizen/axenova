'use client';

import React, { useState } from 'react';
import { Truck, CheckCircle, ShieldCheck, ChevronLeft, ChevronRight, Award, Smartphone, Trash2, BatteryCharging, Wind, Smile, Star } from 'lucide-react';
import { PRICE_PROMO, PRICE_LIST } from '../lib/constants';

interface HeroProps {
  onScrollToForm: () => void;
}

const HERO_IMAGES = [
  "https://picsum.photos/800/800?random=1",
  "https://picsum.photos/800/800?random=10",
  "https://picsum.photos/800/800?random=11",
  "https://picsum.photos/800/800?random=12"
];

const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white pb-0">
      {/* Top Warning Bar - Urgency */}
      <div className="bg-yellow-300 text-center py-2 px-4 font-bold text-red-700 text-sm uppercase tracking-wide animate-pulse">
        ⚠️ Attenzione: Liquidazione Totale - Ultimi pezzi
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6 pb-8">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-black text-center text-gray-900 leading-tight mb-2 uppercase">
          ASPIRA, LAVA E ASCIUGA <br/> <span className="text-red-600">IN UNA SOLA PASSATA.</span>
        </h1>
        
        {/* Subheadline - Strong Benefit */}
        <p className="text-lg md:text-xl text-center text-gray-600 font-medium mb-6 leading-relaxed max-w-2xl mx-auto">
          L&apos;unico robot che <strong>elimina macchie incrostate</strong>, <strong>liquidi</strong> e <strong>peli di animali</strong> contemporaneamente. <br/>
          <span className="font-bold text-gray-900 bg-yellow-100 px-1">Butta via mocio, secchio e scopa per sempre.</span>
        </p>

        {/* Image Slider - Placeholder for Product Shots */}
        <div className="relative w-full max-w-md md:max-w-lg mx-auto aspect-square rounded-xl overflow-hidden shadow-2xl mb-6 border-4 border-gray-100">
          
          {/* Social Proof Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg flex items-center gap-1 border border-green-500">
             <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
             </div>
             <span className="text-xs font-bold text-gray-800">Best Seller 2025</span>
          </div>

          <img 
            src={HERO_IMAGES[currentSlide]} 
            alt={`Robot aspirapolvere lavapavimenti foto ${currentSlide + 1}`} 
            className="w-full h-full object-cover"
          />
          
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white text-gray-800"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white text-gray-800"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {HERO_IMAGES.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-red-600' : 'bg-white/60'}`} 
              />
            ))}
          </div>
        </div>

        {/* STOCK BAR - VISUAL URGENCY */}
        <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-xs font-bold text-red-600 mb-1 uppercase">
                <span>Disponibilità in esaurimento</span>
                <span>14 pezzi rimasti</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden border border-gray-300">
                <div className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full w-[12%] animate-pulse"></div>
            </div>
        </div>

        {/* Main Benefit Bullets - 6 Strong Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 max-w-2xl mx-auto mb-8 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div className="flex items-start gap-3">
                <Smile className="text-green-600 shrink-0 mt-0.5" size={22} strokeWidth={2.5} />
                <span className="text-base text-gray-800 leading-tight">
                    <strong>Addio Mal di Schiena</strong>: Non ti piegherai mai più per spazzare o passare lo straccio.
                </span>
            </div>
             <div className="flex items-start gap-3">
                <Trash2 className="text-green-600 shrink-0 mt-0.5" size={22} strokeWidth={2.5} />
                <span className="text-base text-gray-800 leading-tight">
                    <strong>Mani Sempre Pulite</strong>: La base svuota la polvere e ricarica l&apos;acqua da sola. Tu lo ignori per mesi.
                </span>
            </div>
            <div className="flex items-start gap-3">
                <Wind className="text-green-600 shrink-0 mt-0.5" size={22} strokeWidth={2.5} />
                <span className="text-base text-gray-800 leading-tight">
                    <strong>Peli di Animali? Spariti</strong>: Aspira il 99% di peli e capelli senza intasarsi, anche dai tappeti.
                </span>
            </div>
            <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={22} strokeWidth={2.5} />
                <span className="text-base text-gray-800 leading-tight">
                    <strong>Lava e Asciuga Davvero</strong>: Moci rotanti che scrostano sugo e caffè. Pavimento asciutto in 1 minuto.
                </span>
            </div>
            <div className="flex items-start gap-3">
                <BatteryCharging className="text-green-600 shrink-0 mt-0.5" size={22} strokeWidth={2.5} />
                <span className="text-base text-gray-800 leading-tight">
                    <strong>Batteria Infinita (8 Ore)</strong>: Pulisce ville intere. Se si scarica, torna alla base e riparte.
                </span>
            </div>
            <div className="flex items-start gap-3">
                <Smartphone className="text-green-600 shrink-0 mt-0.5" size={22} strokeWidth={2.5} />
                <span className="text-base text-gray-800 leading-tight">
                    <strong>Comandalo dal Divano</strong>: Scegli dall&apos;App le stanze da pulire. Tu riposi, lui lavora.
                </span>
            </div>
        </div>

        {/* Price Display */}
        <div className="flex flex-col items-center justify-center mb-6 mt-12 relative">
            {/* -50% Bubble Badge */}
            <div className="absolute -top-10 right-4 md:right-24 bg-red-600 text-white w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center rounded-full shadow-xl z-10 rotate-12 border-4 border-white">
                <span className="text-xl md:text-2xl font-black leading-none">-50%</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase">Sconto</span>
            </div>

            <div className="text-sm font-bold text-red-600 uppercase tracking-wider bg-red-100 px-3 py-1 rounded-full mb-2">
                Offerta a Tempo Limitato
            </div>
            <div className="flex items-end gap-4">
                <span className="text-2xl text-gray-400 line-through font-medium mb-2">€{PRICE_LIST}</span>
                <span className="text-6xl font-black text-gray-900 tracking-tighter">
                    €{PRICE_PROMO.toString().replace('.', ',')}
                </span>
            </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm font-bold text-gray-600 mb-6 uppercase tracking-tight">
          <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded">
            <Truck size={16} className="text-blue-600" /> Spedizione 24/48h
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded">
            <ShieldCheck size={16} className="text-green-600" /> Pagamento alla Consegna
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded border border-orange-200">
            <Award size={16} className="text-orange-500" /> Garanzia 2 Anni
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
            <button 
                onClick={onScrollToForm}
                className="w-full md:w-auto bg-green-600 text-white text-xl md:text-2xl font-black py-4 px-8 rounded-xl shadow-xl hover:bg-green-700 transform transition hover:scale-105 animate-bounce-slow border-b-4 border-green-800"
            >
                ORDINA ORA – PAGO ALLA CONSEGNA
            </button>
            <p className="mt-3 text-sm text-gray-500">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                Compili il modulo, ti richiamiamo noi per conferma.
            </p>
        </div>
      </div>

      {/* Authority Bar */}
      <div className="bg-gray-100 border-t border-gray-200 py-4 overflow-hidden">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Prodotto Consigliato Da</p>
        <div className="flex justify-center items-center gap-4 md:gap-12 opacity-60 grayscale flex-wrap px-4">
            <span className="font-black text-sm md:text-lg text-gray-600 font-serif">TechHome</span>
            <span className="font-black text-sm md:text-lg text-gray-600">CasaFacile</span>
            <span className="font-bold text-sm md:text-xl text-gray-600 italic">SmartLife</span>
            <span className="font-black text-sm md:text-lg text-gray-600">DNews</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;