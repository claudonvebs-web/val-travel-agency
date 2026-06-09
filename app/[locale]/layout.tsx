import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { getDictionary, Locale, locales } from '@/lib/site-data';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const t = getDictionary(locale);
  return <><Header locale={locale} nav={t.nav}/><main>{children}</main><FloatingWhatsApp/><Footer locale={locale} nav={t.nav}/></>;
}

function FloatingWhatsApp() {
  return <a href="https://wa.me/261340000000" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-glow transition hover:scale-105" aria-label="Contact Val Island Tour on WhatsApp">✆</a>;
}
