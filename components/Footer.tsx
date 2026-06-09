import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Locale, localizedPath } from '@/lib/site-data';

export function Footer({ locale, nav }: { locale: Locale; nav: Readonly<Record<string, string>> }) {
  const links = [['/', nav.home], ['/about', nav.about], ['/destinations', nav.destinations], ['/tours', nav.tours], ['/transport', nav.transport], ['/gallery', nav.gallery], ['/contact', nav.contact]];
  return (
    <footer className="bg-midnight text-white">
      <div className="luxury-container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2"><div className="font-display text-3xl font-semibold text-gold">Val Island Tour</div><p className="mt-4 max-w-md text-white/70">Luxury tailor-made tours, island excursions, transfers and private transport across Madagascar.</p><div className="mt-6 flex gap-3"><a className="rounded-full bg-white/10 p-3 hover:bg-gold hover:text-midnight" href="#" aria-label="Instagram"><Instagram size={18}/></a><a className="rounded-full bg-white/10 p-3 hover:bg-gold hover:text-midnight" href="#" aria-label="Facebook"><Facebook size={18}/></a><a className="rounded-full bg-white/10 p-3 hover:bg-gold hover:text-midnight" href="#" aria-label="Telegram"><Send size={18}/></a></div></div>
        <div><h2 className="font-bold text-gold">Quick links</h2><ul className="mt-4 grid gap-2 text-sm text-white/75">{links.map(([href, label]) => <li key={href}><Link className="hover:text-gold" href={localizedPath(locale, href)}>{label}</Link></li>)}</ul></div>
        <div><h2 className="font-bold text-gold">Contact</h2><ul className="mt-4 grid gap-3 text-sm text-white/75"><li className="flex gap-2"><MapPin size={18}/> Madagascar · Nosy Be</li><li className="flex gap-2"><Phone size={18}/> +261 34 00 000 00</li><li className="flex gap-2"><Mail size={18}/> hello@valislandtour.com</li></ul></div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">© {new Date().getFullYear()} Val Island Tour. All rights reserved.</div>
    </footer>
  );
}
