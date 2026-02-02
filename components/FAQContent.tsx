'use client'

import { Category, FAQCategory } from '@/data/faqData'
import FAQCard from './FAQCard'

interface FAQContentProps {
  activeCategory: Category
  faqData: FAQCategory[]
  searchQuery: string
}

export default function FAQContent({ activeCategory, faqData, searchQuery }: FAQContentProps) {
  const currentCategory = faqData.find(cat => cat.id === activeCategory)

  if (!currentCategory) return null

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? currentCategory.faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : currentCategory.faqs

  return (
    <main className="min-h-[500px]">
      <div className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {currentCategory.title}
        </h2>
        
        {filteredFaqs.length === 0 ? (
          <div className="text-lg text-gray-500 py-12 px-6 text-center bg-white rounded-xl border-2 border-dashed border-gray-300">
            No results found for &quot;{searchQuery}&quot;
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <FAQCard key={faq.id} faq={faq} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
