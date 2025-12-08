'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import { PRODUCT_NAME } from '../lib/constants';

const comparisonData = [
  { feature: 'Base Autosvuotante', ours: 'Incluso', oursIcon: true, theirs: 'Optional (€300)', theirsIcon: false },
  { feature: 'Controllo App', ours: 'Sì (Completo)', oursIcon: true, theirs: 'Impreciso', theirsIcon: false },
  { feature: 'Autonomia', ours: '8 Ore', oursIcon: null, theirs: 'Max 90 min', theirsIcon: null },
  { feature: 'Aspirazione', ours: 'Aspira Bulloni', oursIcon: null, theirs: 'Standard', theirsIcon: null },
  { feature: 'Pago alla Consegna', ours: 'Sì', oursIcon: true, theirs: 'No (Solo Carta)', theirsIcon: false },
  { feature: 'Prezzo', ours: '€79,99', oursIcon: null, theirs: '€800+', theirsIcon: null, isPrice: true },
];

const Comparison: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center text-gray-900 mb-8">
          NON BUTTARE I TUOI SOLDI
        </h2>

        {/* Mobile: Cards Layout */}
        <div className="md:hidden space-y-3">
          {comparisonData.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="font-bold text-gray-700 text-sm mb-2">{item.feature}</p>
              <div className="flex justify-between gap-2">
                <div className={`flex-1 text-center p-2 rounded ${item.isPrice ? 'bg-red-100' : 'bg-green-50'}`}>
                  <p className="text-[10px] text-gray-500 uppercase mb-1">{PRODUCT_NAME}</p>
                  <div className={`flex items-center justify-center gap-1 ${item.isPrice ? 'text-red-600 font-black text-lg' : 'text-green-600 font-bold text-sm'}`}>
                    {item.oursIcon === true && <Check size={14} strokeWidth={3} />}
                    {item.ours}
                  </div>
                </div>
                <div className="flex-1 text-center p-2 rounded bg-gray-100">
                  <p className="text-[10px] text-gray-400 uppercase mb-1">Altri</p>
                  <div className={`flex items-center justify-center gap-1 text-gray-400 text-sm ${item.isPrice ? 'line-through' : ''}`}>
                    {item.theirsIcon === false && <X size={14} />}
                    {item.theirs}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table Layout */}
        <div className="hidden md:block overflow-x-auto shadow-lg rounded-xl border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 w-1/3 text-sm font-medium uppercase tracking-wider">Caratteristica</th>
                <th className="p-4 w-1/3 text-center bg-red-600 font-bold border-b-4 border-red-800 text-lg md:text-xl relative">
                  {PRODUCT_NAME}
                  <div className="absolute top-0 right-0 bg-yellow-400 text-red-900 text-[10px] font-bold px-2 py-0.5 rounded-bl">WINNER</div>
                </th>
                <th className="p-4 w-1/3 text-center text-gray-300 font-normal">Altri Robot di Marca</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-700">Base Autosvuotante (Polvere+Acqua)</td>
                <td className="p-4 text-center bg-red-50 font-bold text-green-600"><div className="flex justify-center gap-1"><Check strokeWidth={4} /> Incluso</div></td>
                <td className="p-4 text-center text-gray-400"><div className="flex justify-center gap-1"><X /> Optional (costa €300)</div></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-700">Controllo da App e Stanze</td>
                <td className="p-4 text-center bg-red-50 font-bold text-green-600"><div className="flex justify-center gap-1"><Check strokeWidth={4} /> Sì (Completo)</div></td>
                <td className="p-4 text-center text-gray-400">Spesso impreciso</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-700">Autonomia Batteria</td>
                <td className="p-4 text-center bg-red-50 font-bold text-gray-900">8 Ore (Torna alla base)</td>
                <td className="p-4 text-center text-gray-500">Max 90 minuti</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-700">Potenza Aspirazione</td>
                <td className="p-4 text-center bg-red-50 font-bold text-gray-900">Aspira Bulloni</td>
                <td className="p-4 text-center text-gray-500">Standard</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-700">Pagamento alla Consegna</td>
                <td className="p-4 text-center bg-red-50 font-bold text-green-600"><div className="flex justify-center gap-1"><Check strokeWidth={4} /> Sì</div></td>
                <td className="p-4 text-center text-gray-400"><div className="flex justify-center gap-1"><X /> No (Solo Carta)</div></td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-gray-700">Prezzo</td>
                <td className="p-4 text-center bg-red-50 font-black text-red-600 text-xl">€79,99</td>
                <td className="p-4 text-center text-gray-500 line-through">€800,00+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;