import type { Metadata } from 'next';
import { GallerySection } from '@/components/Sections';
import { getDictionary, Locale } from '@/lib/site-data';
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { const { locale } = await params; const t = getDictionary(locale); return { title: `${t.gallery.title} | Val Island Tour`, description: t.gallery.subtitle }; }
export default async function Gallery({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; const t = getDictionary(locale); return <div className="pt-20"><GallerySection title={t.gallery.title} subtitle={t.gallery.subtitle} videos={t.gallery.videos}/></div>; }
