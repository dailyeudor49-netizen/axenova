import { Review, BundleItem } from './types';

export const PRODUCT_NAME = "Robot Clean Pro X";
export const PRICE_LIST = 159.99;
export const PRICE_PROMO = 79.99;
export const DISCOUNT_PERCENT = 50;

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Maria Rossi",
    city: "Milano",
    rating: 5,
    text: "Non ci credevo, ma pulisce davvero bene! Ho due gatti e raccoglie tutti i peli. Finalmente non devo passare la scopa ogni giorno.",
    verified: true,
    date: "2 giorni fa",
    hasImage: true,
    imageUrl: "/images/robotcleanprox imggif/recensioni/716UOMnH5CL.jpg"
  },
  {
    id: 2,
    name: "Giuseppe Verdi",
    city: "Roma",
    rating: 5,
    text: "Arrivato in 24 ore. Ho pagato al corriere in contanti, comodissimo. Il robot è semplice da usare, basta premere un tasto.",
    verified: true,
    date: "1 settimana fa",
    hasImage: true,
    imageUrl: "/images/robotcleanprox imggif/recensioni/71UbGcy+zOL.jpg"
  },
  {
    id: 3,
    name: "Lucia Bianchi",
    city: "Napoli",
    rating: 4,
    text: "Ottimo rapporto qualità prezzo. Lava anche abbastanza bene per una passata veloce. Consigliato a chi ha poco tempo.",
    verified: true,
    date: "3 giorni fa",
    hasImage: true,
    imageUrl: "/images/robotcleanprox imggif/recensioni/61H4YDTqFUL.jpg"
  },
  {
    id: 4,
    name: "Antonio Esposito",
    city: "Bari",
    rating: 5,
    text: "Mia moglie è felicissima. Meno mal di schiena per lei. Assistenza gentile, mi hanno chiamato per confermare l'indirizzo.",
    verified: true,
    date: "Ieri",
    hasImage: true,
    imageUrl: "/images/robotcleanprox imggif/recensioni/617ra1G4FvL.jpg"
  },
  {
    id: 5,
    name: "Francesca Neri",
    city: "Torino",
    rating: 5,
    text: "Ero scettica ma mi sono ricreduta. Aspira polvere fine che nemmeno vedevo. La batteria dura parecchio.",
    verified: true,
    date: "5 giorni fa",
    hasImage: false
  },
  {
    id: 6,
    name: "Roberto G.",
    city: "Firenze",
    rating: 5,
    text: "Pagamento alla consegna una garanzia. Prodotto robusto, sale anche sui tappeti bassi.",
    verified: true,
    date: "2 settimane fa",
    hasImage: false
  },
  {
    id: 7,
    name: "Elena G.",
    city: "Bologna",
    rating: 5,
    text: "Miglior acquisto dell'anno. Silenzioso e preciso.",
    verified: true,
    date: "1 giorno fa",
    hasImage: false
  },
  {
    id: 8,
    name: "Marco D.",
    city: "Palermo",
    rating: 5,
    text: "La base che si svuota da sola è una comodità assurda. Non tocchi nulla per settimane.",
    verified: true,
    date: "3 giorni fa",
    hasImage: false
  },
  {
    id: 9,
    name: "Simona L.",
    city: "Genova",
    rating: 4,
    text: "Pulisce bene anche negli angoli. Consigliato per chi ha animali in casa.",
    verified: true,
    date: "Ieri",
    hasImage: false
  }
];

export const BUNDLE_ITEMS: BundleItem[] = [
  { name: "Cavo di Alimentazione", quantity: 1, iconName: "plug" },
  { name: "Sacchetto Polvere", quantity: 2, iconName: "trash" },
  { name: "Spazzole Laterali", quantity: 2, iconName: "wind" },
  { name: "Supporto Mocio", quantity: 2, iconName: "disc" },
  { name: "Panno Lavabile", quantity: 4, iconName: "droplet" },
  { name: "Filtro HEPA", quantity: 2, iconName: "filter" },
  { name: "Strumento Pulizia", quantity: 1, iconName: "brush" },
  { name: "Liquido Detergente", quantity: 1, iconName: "flask" },
  { name: "Manuale Utente", quantity: 1, iconName: "book" },
];

export const FAQ_ITEMS = [
  {
    question: "Come pago?",
    answer: "Paghi direttamente al corriere in contanti quando ricevi il pacco. Nessuna carta di credito necessaria."
  },
  {
    question: "Quanto costa la spedizione?",
    answer: "La spedizione è GRATUITA per ordini effettuati oggi."
  },
  {
    question: "Cosa succede se si rompe?",
    answer: "Hai 2 anni di garanzia inclusa. Se non funziona, te lo sostituiamo."
  },
  {
    question: "Aspira anche i peli di animali?",
    answer: "Sì, è progettato appositamente per aspirare peli di cani e gatti senza intasarsi."
  }
];