'use client'

import { Category, categoryInfo } from '@/data/faqData'

interface CategorySidebarProps {
  activeCategory: Category
  setActiveCategory: (category: Category) => void
}

const categoryIcons: Record<string, JSX.Element> = {
  info: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 6V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="14" r="0.5" fill="currentColor"/>
    </svg>
  ),
  'credit-card': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 8H18" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L2 7L10 12L18 7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L10 17L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  settings: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2V6M10 14V18M2 10H6M14 10H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
}

export default function CategorySidebar({ activeCategory, setActiveCategory }: CategorySidebarProps) {
  const categories: Category[] = ['general', 'subscription', 'installation', 'compatibility']

  return (
    <aside className="lg:sticky lg:top-6">
      <nav className="flex flex-row lg:flex-col gap-2 bg-white rounded-xl p-3 shadow-custom-sm border border-gray-200 overflow-x-auto lg:overflow-x-visible">
        {categories.map((category) => {
          const info = categoryInfo[category]
          const isActive = activeCategory === category
          
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-250 ease-in-out text-left relative whitespace-nowrap flex-shrink-0 lg:flex-shrink
                ${isActive 
                  ? 'text-hot-pink bg-gradient-subtle font-semibold' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:translate-x-1 lg:hover:translate-x-1 lg:hover:translate-y-0'
                }
              `}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-gradient-primary rounded-full" />
              )}
              <span className="flex-shrink-0">
                {categoryIcons[info.icon]}
              </span>
              <span>{info.title}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
