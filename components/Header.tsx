'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Locale, localeLabels, locales, localizedPath } from '@/lib/site-data';

export function Header({ locale, nav }: { locale: Locale; nav: Readonly<Record<string, string>> }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const links = [
    ['/', nav.home], ['/about', nav.about], ['/destinations', nav.destinations], ['/tours', nav.tours], ['/transport', nav.transport], ['/gallery', nav.gallery], ['/testimonials', nav.testimonials], ['/contact', nav.contact]
  ];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const switchLocale = (nextLocale: Locale) => {
    const rest = pathname.replace(/^\/(en|fr|it)/, '') || '/';
    return rest === '/' ? `/${nextLocale}` : `/${nextLocale}${rest}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/55 text-white backdrop-blur-2xl">
      <nav className="luxury-container flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link href={localizedPath(locale, '/')} className="focus-ring flex items-center gap-3 rounded-full" aria-label="Val Island Tour home">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/70 bg-white/10 font-display text-xl font-bold text-gold shadow-glow">V</span>
          <span className="leading-tight"><span className="block font-display text-xl font-semibold">Val Island</span><span className="block text-xs uppercase tracking-[0.32em] text-lagoon-100">Tour</span></span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([href, label]) => <Link key={href} className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white" href={localizedPath(locale, href)}>{label}</Link>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-full border border-white/15 bg-white/10 p-1" aria-label="Language switcher">
            {locales.map((item) => <Link key={item} href={switchLocale(item)} className={`rounded-full px-2.5 py-1 text-xs font-bold ${item === locale ? 'bg-gold text-midnight' : 'text-white/80 hover:text-white'}`}>{localeLabels[item]}</Link>)}
          </div>
          <button onClick={() => setDark(!dark)} className="focus-ring rounded-full border border-white/15 bg-white/10 p-2" aria-label="Toggle dark mode">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <Link href={localizedPath(locale, '/contact')} className="focus-ring rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-midnight shadow-glow transition hover:-translate-y-0.5">{nav.book}</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="focus-ring rounded-full border border-white/20 p-2 lg:hidden" aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-midnight/95 px-4 pb-6 lg:hidden"><div className="grid gap-2 pt-4">{links.map(([href, label]) => <Link onClick={() => setOpen(false)} key={href} href={localizedPath(locale, href)} className="rounded-2xl px-4 py-3 text-white/90 hover:bg-white/10">{label}</Link>)}<div className="flex gap-2 pt-2">{locales.map((item) => <Link key={item} href={switchLocale(item)} className={`rounded-full px-4 py-2 text-sm font-bold ${item === locale ? 'bg-gold text-midnight' : 'bg-white/10 text-white'}`}>{localeLabels[item]}</Link>)}</div></div></div>}
    </header>
  );
}
