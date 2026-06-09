import type { Metadata } from 'next';
import { ContactForms, ToursGrid } from '@/components/Sections';
import { getDictionary, Locale } from '@/lib/site-data';
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { const { locale } = await params; const t = getDictionary(locale); return { title: `${t.tours.title} | Val Island Tour`, description: t.tours.subtitle }; }
export default async function Tours({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; const t = getDictionary(locale); return <div className="pt-20"><ToursGrid locale={locale} title={t.tours.title} subtitle={t.tours.subtitle} book={t.common.book} price={t.common.price}/><ContactForms title="Tour booking form" subtitle="Reserve a private excursion or ask us to customize every detail." formTitle={t.contact.formTitle} newsletter={t.contact.newsletter}/></div>; }
