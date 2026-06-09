import type { Metadata } from 'next';
import { ContactForms } from '@/components/Sections';
import { getDictionary, Locale } from '@/lib/site-data';
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { const { locale } = await params; const t = getDictionary(locale); return { title: `${t.contact.title} | Val Island Tour`, description: t.contact.subtitle }; }
export default async function Contact({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; const t = getDictionary(locale); return <div className="pt-20"><ContactForms title={t.contact.title} subtitle={t.contact.subtitle} formTitle={t.contact.formTitle} newsletter={t.contact.newsletter}/></div>; }
