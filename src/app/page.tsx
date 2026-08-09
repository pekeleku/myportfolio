"use client";
import Header from '@/components/parts/Header'
import Hero from '@/components/parts/Hero'
import Projects from '@/components/parts/Projects'
import Sitemap from '@/components/parts/Sitemap'
import Footer from '@/components/parts/Footer'
import Advantage from '@/components/parts/Advantage'
import ScrollToTop from '@/components/reusable/ScrollToTop'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Advantage />
      <Projects />
      <Sitemap />
      <Footer />
      <ScrollToTop />
    </>
  )
}
