import { Hero } from '@/components/home/Hero'
import { ServicesSection } from '@/components/home/ServicesSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { GalleryPreview } from '@/components/home/GalleryPreview'
import { ContactCTA } from '@/components/home/ContactCTA'

export function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <AboutPreview />
      <GalleryPreview />
      <ContactCTA />
    </main>
  )
}
