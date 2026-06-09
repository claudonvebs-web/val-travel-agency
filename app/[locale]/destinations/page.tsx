import type { Metadata } from 'next';
import { DestinationsGrid } from '@/components/Sections';
import { getDictionary, Locale } from '@/lib/site-data';
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { const { locale } = await params; const t = getDictionary(locale); return { title: `${t.destinations.title} | Val Island Tour`, description: t.destinations.subtitle }; }
export default async function Destinations({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; const t = getDictionary(locale); return <div className="pt-20"><DestinationsGrid title={t.destinations.title} subtitle={t.destinations.subtitle} searchLabel={t.common.search}/></div>; }
