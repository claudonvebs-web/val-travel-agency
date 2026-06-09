import { Anchor, BadgeCheck, Binoculars, CalendarDays, Camera, Car, Globe2, HeartHandshake, Leaf, MapPin, MessageCircle, Plane, ShieldCheck, ShipWheel, Sparkles, Star, UsersRound } from 'lucide-react';

export const locales = ['en', 'fr', 'it'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = { en: 'EN', fr: 'FR', it: 'IT' };

export const heroImage = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2200&q=85';

export const destinationImages = {
  nosyBe: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
  nosyKomba: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1400&q=80',
  nosyIranja: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80',
  nosySakatia: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80',
  lokobe: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=80',
  diego: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  amber: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80',
  tsingy: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=80'
};

export const tourImages = {
  island: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=80',
  wildlife: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&w=1400&q=80',
  vip: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80',
  north: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
  ocean: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1400&q=80',
  culture: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=80'
};

export const galleryImages = [
  destinationImages.nosyIranja,
  destinationImages.lokobe,
  tourImages.ocean,
  destinationImages.amber,
  tourImages.culture,
  destinationImages.nosySakatia,
  destinationImages.tsingy,
  tourImages.vip,
  destinationImages.diego
];

export const icons = { Anchor, BadgeCheck, Binoculars, CalendarDays, Camera, Car, Globe2, HeartHandshake, Leaf, MapPin, MessageCircle, Plane, ShieldCheck, ShipWheel, Sparkles, Star, UsersRound };

export const dictionary = {
  en: {
    meta: {
      title: 'Val Island Tour | Luxury Tailor-Made Madagascar Travel Agency',
      description: 'Luxury multilingual tourism website for Val Island Tour: tailor-made Madagascar tours, island excursions, transfers, VIP transport and authentic experiences.'
    },
    nav: { home: 'Home', about: 'About', destinations: 'Destinations', tours: 'Tours', transport: 'Transport', gallery: 'Gallery', testimonials: 'Testimonials', contact: 'Contact', book: 'Book Now' },
    common: { quote: 'Request a Quote', whatsapp: 'Contact on WhatsApp', book: 'Book Now', learn: 'Learn more', from: 'From', price: 'On request', days: 'days', night: 'nights', search: 'Search destinations', email: 'Email us', phone: 'WhatsApp' },
    home: {
      eyebrow: 'Madagascar private travel designer',
      title: 'Discover Madagascar with Val Island Tour',
      subtitle: 'Your trusted partner for unforgettable adventures across Madagascar.',
      intro: 'Bespoke island escapes, wildlife encounters, scenic transfers and elegant travel support from arrival to farewell.',
      whyTitle: 'Why Choose Us',
      destinationsTitle: 'Popular Destinations',
      toursTitle: 'Featured Tours',
      testimonialsTitle: 'Traveler Stories',
      galleryTitle: 'Gallery Preview',
      ctaTitle: 'Ready for a perfectly tailored Madagascar escape?',
      ctaText: 'Tell us your dates, style and dreams. We will craft a private itinerary with transparent pricing and local expertise.'
    },
    about: {
      title: 'About Val Island Tour',
      subtitle: 'A Madagascar-based travel agency designing premium, personal and responsible journeys.',
      presentation: 'Val Island Tour connects discerning travelers with the landscapes, islands, wildlife and cultures that make Madagascar truly singular. Our multilingual team plans every detail: private tours, boutique excursions, airport transfers, chauffeur services and once-in-a-lifetime experiences.',
      mission: 'Our mission is to create seamless tailor-made holidays that feel effortless, authentic and safe.',
      vision: 'Our vision is to become the most trusted boutique tourism partner for travelers seeking Madagascar with comfort, depth and respect.',
      teamTitle: 'Meet your local team',
      valuesTitle: 'Our Values'
    },
    destinations: { title: 'Destinations', subtitle: 'From turquoise islands to red stone cathedrals, discover Madagascar at your rhythm.' },
    tours: { title: 'Tours & Excursions', subtitle: 'Signature private experiences with flexible durations, local guides and luxury logistics.' },
    transport: { title: 'Transport Services', subtitle: 'Reliable, comfortable transportation for airport arrivals, private days and VIP journeys.' },
    gallery: { title: 'Gallery', subtitle: 'A visual invitation to lagoons, forests, reefs and golden sunsets.', videos: 'Video Inspiration' },
    testimonials: { title: 'Testimonials', subtitle: 'What guests say after exploring Madagascar with Val Island Tour.' },
    contact: { title: 'Contact', subtitle: 'Start planning your Madagascar journey today.', formTitle: 'Request your tailor-made quote', newsletter: 'Join our island travel newsletter', map: 'Find us in Madagascar' }
  },
  fr: {
    meta: { title: 'Val Island Tour | Agence de voyage luxe à Madagascar', description: 'Tours sur mesure à Madagascar, excursions insulaires, transferts aéroport, transport VIP et expériences authentiques avec Val Island Tour.' },
    nav: { home: 'Accueil', about: 'À propos', destinations: 'Destinations', tours: 'Tours', transport: 'Transport', gallery: 'Galerie', testimonials: 'Avis', contact: 'Contact', book: 'Réserver' },
    common: { quote: 'Demander un devis', whatsapp: 'WhatsApp', book: 'Réserver', learn: 'En savoir plus', from: 'À partir de', price: 'Sur demande', days: 'jours', night: 'nuits', search: 'Rechercher une destination', email: 'Nous écrire', phone: 'WhatsApp' },
    home: { eyebrow: 'Créateur de voyages privés à Madagascar', title: 'Discover Madagascar with Val Island Tour', subtitle: 'Your trusted partner for unforgettable adventures across Madagascar.', intro: 'Évasions insulaires, rencontres nature, transferts panoramiques et accompagnement premium du premier au dernier jour.', whyTitle: 'Pourquoi nous choisir', destinationsTitle: 'Destinations populaires', toursTitle: 'Tours en vedette', testimonialsTitle: 'Témoignages', galleryTitle: 'Aperçu galerie', ctaTitle: 'Prêt pour une escapade à Madagascar parfaitement sur mesure ?', ctaText: 'Partagez vos dates, votre style et vos envies. Nous créons un itinéraire privé avec expertise locale et prix transparents.' },
    about: { title: 'À propos de Val Island Tour', subtitle: 'Une agence basée à Madagascar qui imagine des voyages premium, humains et responsables.', presentation: 'Val Island Tour relie les voyageurs exigeants aux paysages, îles, faune et cultures qui rendent Madagascar unique. Notre équipe multilingue orchestre chaque détail : circuits privés, excursions boutique, transferts aéroport, chauffeurs et expériences rares.', mission: 'Notre mission est de créer des séjours sur mesure fluides, authentiques et sûrs.', vision: 'Notre vision est de devenir le partenaire boutique le plus fiable pour découvrir Madagascar avec confort, profondeur et respect.', teamTitle: 'Votre équipe locale', valuesTitle: 'Nos valeurs' },
    destinations: { title: 'Destinations', subtitle: 'Des îles turquoise aux cathédrales de pierre rouge, découvrez Madagascar à votre rythme.' },
    tours: { title: 'Tours & Excursions', subtitle: 'Expériences privées signatures avec durées flexibles, guides locaux et logistique haut de gamme.' },
    transport: { title: 'Services de transport', subtitle: 'Transport fiable et confortable pour arrivées aéroport, journées privées et trajets VIP.' },
    gallery: { title: 'Galerie', subtitle: 'Une invitation visuelle entre lagons, forêts, récifs et couchers de soleil dorés.', videos: 'Inspirations vidéo' },
    testimonials: { title: 'Témoignages', subtitle: 'Ce que disent nos voyageurs après Madagascar avec Val Island Tour.' },
    contact: { title: 'Contact', subtitle: 'Commençons à planifier votre voyage à Madagascar.', formTitle: 'Demandez votre devis sur mesure', newsletter: 'Recevez nos inspirations voyage', map: 'Nous trouver à Madagascar' }
  },
  it: {
    meta: { title: 'Val Island Tour | Agenzia viaggi luxury in Madagascar', description: 'Tour su misura in Madagascar, escursioni nelle isole, transfer aeroportuali, trasporti VIP ed esperienze autentiche con Val Island Tour.' },
    nav: { home: 'Home', about: 'Chi siamo', destinations: 'Destinazioni', tours: 'Tour', transport: 'Trasporti', gallery: 'Galleria', testimonials: 'Recensioni', contact: 'Contatti', book: 'Prenota' },
    common: { quote: 'Richiedi preventivo', whatsapp: 'WhatsApp', book: 'Prenota ora', learn: 'Scopri di più', from: 'Da', price: 'Su richiesta', days: 'giorni', night: 'notti', search: 'Cerca destinazioni', email: 'Scrivici', phone: 'WhatsApp' },
    home: { eyebrow: 'Designer di viaggi privati in Madagascar', title: 'Discover Madagascar with Val Island Tour', subtitle: 'Your trusted partner for unforgettable adventures across Madagascar.', intro: 'Fughe su isole esclusive, fauna endemica, transfer panoramici e assistenza elegante dall’arrivo alla partenza.', whyTitle: 'Perché sceglierci', destinationsTitle: 'Destinazioni popolari', toursTitle: 'Tour in evidenza', testimonialsTitle: 'Storie di viaggiatori', galleryTitle: 'Anteprima galleria', ctaTitle: 'Pronto per un viaggio in Madagascar creato su misura?', ctaText: 'Raccontaci date, stile e desideri. Creeremo un itinerario privato con prezzi chiari ed esperienza locale.' },
    about: { title: 'Chi siamo', subtitle: 'Un’agenzia in Madagascar che crea viaggi premium, personali e responsabili.', presentation: 'Val Island Tour connette viaggiatori esigenti con paesaggi, isole, fauna e culture che rendono il Madagascar unico. Il nostro team multilingue cura ogni dettaglio: tour privati, escursioni boutique, transfer aeroportuali, servizi con autista ed esperienze memorabili.', mission: 'La nostra missione è creare vacanze su misura fluide, autentiche e sicure.', vision: 'La nostra visione è diventare il partner boutique più affidabile per vivere il Madagascar con comfort, profondità e rispetto.', teamTitle: 'Il tuo team locale', valuesTitle: 'I nostri valori' },
    destinations: { title: 'Destinazioni', subtitle: 'Dalle isole turchesi alle cattedrali di roccia rossa, scopri il Madagascar al tuo ritmo.' },
    tours: { title: 'Tour ed escursioni', subtitle: 'Esperienze private con durate flessibili, guide locali e logistica di alto livello.' },
    transport: { title: 'Servizi di trasporto', subtitle: 'Trasporti affidabili e confortevoli per arrivi in aeroporto, giornate private e viaggi VIP.' },
    gallery: { title: 'Galleria', subtitle: 'Un invito visivo tra lagune, foreste, barriere coralline e tramonti dorati.', videos: 'Ispirazione video' },
    testimonials: { title: 'Recensioni', subtitle: 'Cosa dicono gli ospiti dopo aver esplorato il Madagascar con Val Island Tour.' },
    contact: { title: 'Contatti', subtitle: 'Inizia oggi a pianificare il tuo viaggio in Madagascar.', formTitle: 'Richiedi il tuo preventivo su misura', newsletter: 'Iscriviti alla newsletter', map: 'Trovaci in Madagascar' }
  }
} as const;

export const destinations = [
  { key: 'nosyBe', name: 'Nosy Be', tag: 'Luxury beach base', description: 'Perfumed ylang-ylang breezes, sunset cruises, reef snorkeling and boutique island living.' },
  { key: 'nosyKomba', name: 'Nosy Komba', tag: 'Culture & lemurs', description: 'A volcanic island of artisan villages, forest paths and intimate encounters with lemurs.' },
  { key: 'nosyIranja', name: 'Nosy Iranja', tag: 'Sandbank paradise', description: 'Twin islands joined by a white sand ribbon surrounded by unreal turquoise water.' },
  { key: 'nosySakatia', name: 'Nosy Sakatia', tag: 'Turtles & reefs', description: 'Peaceful coves, sea turtles, orchids and laid-back island lunches by the lagoon.' },
  { key: 'lokobe', name: 'Lokobe National Park', tag: 'Rainforest reserve', description: 'Primary forest, black lemurs, chameleons and medicinal plants with expert local guides.' },
  { key: 'diego', name: 'Diego Suarez', tag: 'Emerald bays', description: 'Dramatic bays, kitesurf beaches, colonial charm and access to northern wonders.' },
  { key: 'amber', name: "Montagne d'Ambre", tag: 'Waterfalls & crater lakes', description: 'Cool rainforest trails, waterfalls and endemic wildlife in a lush volcanic massif.' },
  { key: 'tsingy', name: 'Tsingy Rouge', tag: 'Red stone spectacle', description: 'A surreal landscape of sculpted red laterite spires glowing at golden hour.' }
] as const;

export const tours = [
  { title: 'Nosy Iranja Private Escape', duration: '1 day', image: tourImages.island, description: 'Speedboat transfer, sandbank picnic, swimming, lighthouse walk and flexible return timing.' },
  { title: 'Lokobe Wildlife Immersion', duration: 'Full day', image: tourImages.wildlife, description: 'Pirogue approach, rainforest walk, lemur spotting and traditional village lunch.' },
  { title: 'VIP Honeymoon Island Week', duration: '7 days / 6 nights', image: tourImages.vip, description: 'Boutique hotels, private transfers, candlelit dinners, boat days and concierge support.' },
  { title: 'Northern Madagascar Discovery', duration: '5 days / 4 nights', image: tourImages.north, description: 'Diego Suarez, Montagne d’Ambre, Tsingy Rouge and curated coastal viewpoints.' },
  { title: 'Snorkeling & Turtle Day', duration: '1 day', image: tourImages.ocean, description: 'Nosy Sakatia reef exploration, turtle observation and relaxed beachfront lunch.' },
  { title: 'Culture, Spices & Sunset', duration: 'Half day', image: tourImages.culture, description: 'Local market, ylang-ylang stories, artisan stops and a golden-hour panoramic aperitif.' }
] as const;

export const whyChoose = [
  { icon: ShieldCheck, title: 'Safety first', text: 'Vetted routes, reliable partners and attentive support throughout your journey.' },
  { icon: Sparkles, title: 'Tailor-made luxury', text: 'Private itineraries shaped around your pace, celebrations and comfort level.' },
  { icon: Globe2, title: 'Multilingual team', text: 'Smooth communication in French, English and Italian from quote to farewell.' },
  { icon: Leaf, title: 'Responsible tourism', text: 'Experiences designed to benefit local communities and protect fragile ecosystems.' }
];

export const values = [
  { title: 'Authenticity', text: 'Real encounters, local voices and meaningful routes beyond generic sightseeing.' },
  { title: 'Safety', text: 'Careful planning, quality vehicles and trusted captains, guides and chauffeurs.' },
  { title: 'Professionalism', text: 'Responsive service, clear proposals and polished operations from start to finish.' },
  { title: 'Sustainable Tourism', text: 'Respect for communities, wildlife, marine life and Madagascar’s irreplaceable habitats.' }
];

export const transportServices = [
  { icon: Plane, title: 'Airport transfers', text: 'Meet-and-greet arrivals, luggage assistance and punctual hotel or harbor transfers.' },
  { icon: Car, title: 'Private vehicle rental', text: 'Comfortable cars and 4x4 options for coastal roads, parks and custom itineraries.' },
  { icon: UsersRound, title: 'Chauffeur services', text: 'Professional local drivers for meetings, dinners, excursions and multi-day journeys.' },
  { icon: BadgeCheck, title: 'VIP transportation', text: 'Discreet premium service for couples, families, executives and special occasions.' }
];

export const testimonials = [
  { name: 'Claire & Hugo', country: 'France', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80', text: 'Every transfer, boat day and guide was perfectly organized. Nosy Iranja felt like a private dream.', rating: 5 },
  { name: 'James Carter', country: 'United Kingdom', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', text: 'Val Island Tour balanced adventure with comfort. The wildlife day in Lokobe was unforgettable.', rating: 5 },
  { name: 'Giulia Rossi', country: 'Italy', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', text: 'Communication in Italian made everything easy. Elegant service, honest advice and beautiful places.', rating: 5 }
];

export function getDictionary(locale: string) {
  return dictionary[(locales as readonly string[]).includes(locale) ? (locale as Locale) : 'en'];
}

export function localizedPath(locale: Locale, href: string) {
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}
