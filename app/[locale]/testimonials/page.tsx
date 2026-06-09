import type { Metadata } from 'next';
import { TestimonialsSection } from '@/components/Sections';
import { getDictionary, Locale } from '@/lib/site-data';
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { const { locale } = await params; const t = getDictionary(locale); return { title: `${t.testimonials.title} | Val Island Tour`, description: t.testimonials.subtitle }; }
export default async function Testimonials({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; const t = getDictionary(locale); return <div className="pt-20"><TestimonialsSection title={t.testimonials.title} subtitle={t.testimonials.subtitle}/></div>; }
