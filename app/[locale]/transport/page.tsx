import type { Metadata } from 'next';
import { ContactForms, TransportServices } from '@/components/Sections';
import { getDictionary, Locale } from '@/lib/site-data';
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { const { locale } = await params; const t = getDictionary(locale); return { title: `${t.transport.title} | Val Island Tour`, description: t.transport.subtitle }; }
export default async function Transport({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; const t = getDictionary(locale); return <div className="pt-20"><TransportServices title={t.transport.title} subtitle={t.transport.subtitle}/><ContactForms title="Private transportation quote" subtitle="Airport transfer, chauffeur service or VIP route planning in Madagascar." formTitle={t.contact.formTitle} newsletter={t.contact.newsletter}/></div>; }
