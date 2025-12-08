'use client';

import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-10 leading-tight uppercase">
          NON È SOLO UN ROBOT,<br/>È LA TUA NUOVA COLF.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1 - Suction Power (GIF Placeholder) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-red-500 transition-colors group">
             <div className="aspect-square w-full bg-gray-900 relative overflow-hidden">
               {/* PLACEHOLDER FOR GIF: Show robot sucking up heavy debris */}
               <img src="https://picsum.photos/600/600?random=24" alt="GIF Aspirazione Bulloni" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 text-white px-3 py-1 rounded border border-white/50 text-xs font-bold tracking-widest uppercase">GIF: Aspira tutto</span>
               </div>
               <div className="absolute bottom-0 left-0 bg-red-600 text-white font-bold px-4 py-1 text-sm uppercase shadow-md">Motore Turbo</div>
            </div>
             <div className="p-5">
                <h3 className="text-xl font-black mb-2 text-gray-900 uppercase">ASPIRA BULLONI E BATTERIE</h3>
                <p className="text-gray-600 text-base leading-snug">
                Non solo polvere. Ha una potenza tale da aspirare <strong>monete, crocchette e detriti pesanti</strong>. Se passa lui, non rimane niente.
                </p>
            </div>
          </div>

          {/* Feature 2 - Base Station (GIF Placeholder) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-red-500 transition-colors group">
            <div className="aspect-square w-full bg-gray-900 relative overflow-hidden">
               {/* PLACEHOLDER FOR GIF: Show base sucking dust out of robot */}
               <img src="https://picsum.photos/600/600?random=20" alt="GIF Base Autosvuotante" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 text-white px-3 py-1 rounded border border-white/50 text-xs font-bold tracking-widest uppercase">GIF: Svuotamento</span>
               </div>
               <div className="absolute bottom-0 left-0 bg-red-600 text-white font-bold px-4 py-1 text-sm uppercase shadow-md">Base All-in-One</div>
            </div>
            <div className="p-5">
                <h3 className="text-xl font-black mb-2 text-gray-900 uppercase">TI DIMENTICHI DI LUI</h3>
                <p className="text-gray-600 text-base leading-snug">
                Non devi svuotare nulla. La base <strong>aspira lo sporco</strong> nel sacchetto sigillato e <strong>riempie l'acqua</strong> da sola. Tu non ti sporchi le mani per 60 giorni.
                </p>
            </div>
          </div>

          {/* Feature 3 - Washing (GIF Placeholder) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-colors group">
             <div className="aspect-square w-full bg-gray-900 relative overflow-hidden">
               {/* PLACEHOLDER FOR GIF: Show mops spinning and cleaning a coffee stain */}
               <img src="https://picsum.photos/600/600?random=21" alt="GIF Lavaggio Macchie" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 text-white px-3 py-1 rounded border border-white/50 text-xs font-bold tracking-widest uppercase">GIF: Toglie Macchie</span>
               </div>
               <div className="absolute bottom-0 left-0 bg-blue-600 text-white font-bold px-4 py-1 text-sm uppercase shadow-md">Lavaggio a Pressione</div>
            </div>
             <div className="p-5">
                <h3 className="text-xl font-black mb-2 text-gray-900 uppercase">SCROSTA MACCHIE SECCHE</h3>
                <p className="text-gray-600 text-base leading-snug">
                I moci rotanti girano 200 volte al minuto. Eliminano macchie di <strong>caffè, sugo e fango secco</strong>. Il pavimento resta lucido subito.
                </p>
            </div>
          </div>

           {/* Feature 4 - AI Navigation (GIF Placeholder) */}
           <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors group">
             <div className="aspect-square w-full bg-gray-900 relative overflow-hidden">
               {/* PLACEHOLDER FOR GIF: Robot avoiding a toy or shoe */}
               <img src="https://picsum.photos/600/600?random=25" alt="GIF Ostacoli" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 text-white px-3 py-1 rounded border border-white/50 text-xs font-bold tracking-widest uppercase">GIF: Evita Ostacoli</span>
               </div>
               <div className="absolute bottom-0 left-0 bg-orange-600 text-white font-bold px-4 py-1 text-sm uppercase shadow-md">Intelligenza Artificiale</div>
            </div>
             <div className="p-5">
                <h3 className="text-xl font-black mb-2 text-gray-900 uppercase">NON SBATTE E NON CADE</h3>
                <p className="text-gray-600 text-base leading-snug">
                Vede ed <strong>evita ostacoli</strong> come calzini, scarpe e giocattoli. Mappa la casa al millimetro col Laser e non cade dalle scale.
                </p>
            </div>
          </div>

          {/* Feature 5 - App Control */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-green-500 transition-colors group">
             <div className="aspect-square w-full bg-gray-900 relative overflow-hidden">
               {/* PLACEHOLDER FOR GIF: App screen selecting a room */}
               <img src="https://picsum.photos/600/600?random=22" alt="GIF App" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 text-white px-3 py-1 rounded border border-white/50 text-xs font-bold tracking-widest uppercase">GIF: Controllo App</span>
               </div>
               <div className="absolute bottom-0 left-0 bg-green-600 text-white font-bold px-4 py-1 text-sm uppercase shadow-md">App & Voce</div>
            </div>
             <div className="p-5">
                <h3 className="text-xl font-black mb-2 text-gray-900 uppercase">OBBEDISCE AI TUOI COMANDI</h3>
                <p className="text-gray-600 text-base leading-snug">
                "Alexa, pulisci la cucina". Oppure usa l'App per dirgli <strong>dove andare</strong> e quando partire, anche se sei fuori casa.
                </p>
            </div>
          </div>

          {/* Feature 6 - Battery 8 Hours */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-purple-500 transition-colors group">
             <div className="aspect-square w-full bg-gray-900 relative overflow-hidden">
               {/* PLACEHOLDER FOR GIF: Robot going back to dock */}
               <img src="https://picsum.photos/600/600?random=23" alt="GIF Ricarica" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 text-white px-3 py-1 rounded border border-white/50 text-xs font-bold tracking-widest uppercase">GIF: Ricarica</span>
               </div>
               <div className="absolute bottom-0 left-0 bg-purple-600 text-white font-bold px-4 py-1 text-sm uppercase shadow-md">8 Ore di Autonomia</div>
            </div>
             <div className="p-5">
                <h3 className="text-xl font-black mb-2 text-gray-900 uppercase">INFATICABILE</h3>
                <p className="text-gray-600 text-base leading-snug">
                La batteria dura <strong>fino a 8 ore</strong>. Pulisce ville a più piani in un colpo solo. Se si scarica, torna alla base, si ricarica e <strong>riparte da solo</strong>.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;