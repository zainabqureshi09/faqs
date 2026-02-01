'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import CategorySidebar from '@/components/CategorySidebar'
import FAQContent from '@/components/FAQContent'
import SupportCTA from '@/components/SupportCTA'
import { faqData, Category } from '@/data/faqData'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('general')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="bg-gray-50">
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
            <CategorySidebar 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <FAQContent 
              activeCategory={activeCategory}
              faqData={faqData}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </section>

      <SupportCTA />
    </main>
  )
}
