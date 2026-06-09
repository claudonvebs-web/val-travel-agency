import type { Metadata } from 'next';
import { ContactForms, DestinationsGrid, GallerySection, Hero, TestimonialsSection, ToursGrid, WhyChoose } from '@/components/Sections';
import { getDictionary, Locale } from '@/lib/site-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return { title: t.meta.title, description: t.meta.description, alternates: { canonical: `/${locale}` } };
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  return <><Hero locale={locale} t={t}/><WhyChoose title={t.home.whyTitle}/><DestinationsGrid title={t.home.destinationsTitle} subtitle={t.destinations.subtitle}/><ToursGrid locale={locale} title={t.home.toursTitle} subtitle={t.tours.subtitle} book={t.common.book} price={t.common.price}/><TestimonialsSection title={t.home.testimonialsTitle} subtitle={t.testimonials.subtitle}/><GallerySection title={t.home.galleryTitle} subtitle={t.gallery.subtitle}/><ContactForms title={t.home.ctaTitle} subtitle={t.home.ctaText} formTitle={t.contact.formTitle} newsletter={t.contact.newsletter}/></>;
}
