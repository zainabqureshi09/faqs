'use client'

import { useState } from 'react'
import { FAQ } from '@/data/faqData'

interface FAQCardProps {
  faq: FAQ
}

export default function FAQCard({ faq }: FAQCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null)
  const [showThanks, setShowThanks] = useState(false)

  const handleFeedback = (type: 'yes' | 'no') => {
    setFeedback(type)
    setShowThanks(true)
    setTimeout(() => setShowThanks(false), 3000)
  }

  return (
    <div className={`
      bg-white rounded-xl border overflow-hidden transition-all duration-250 ease-in-out
      ${isExpanded 
        ? 'border-hot-pink shadow-custom-lg' 
        : 'border-gray-200 hover:shadow-custom-lg hover:border-gray-300'
      }
    `}>
      {/* Question Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 lg:p-8 bg-transparent hover:bg-gradient-subtle transition-all duration-250 text-left"
      >
        <span className="text-lg font-semibold text-gray-900 leading-normal pr-4">
          {faq.question}
        </span>
        <svg
          className={`flex-shrink-0 text-gray-500 transition-transform duration-250 ease-in-out ${
            isExpanded ? 'rotate-180 text-hot-pink' : ''
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Answer Content */}
      <div
        className={`transition-all duration-350 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1200px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 lg:px-8 pb-6 text-gray-700 text-base leading-relaxed space-y-4">
          {faq.answer.map((paragraph, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              className="[&>ul]:list-none [&>ul]:my-4 [&>ul]:p-0 [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[10px] [&>ul>li]:before:w-[6px] [&>ul>li]:before:h-[6px] [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-gradient-primary [&>strong]:font-semibold [&>strong]:text-gray-900"
            />
          ))}
        </div>

        {/* Feedback Section */}
        <div className="flex items-center gap-4 px-6 lg:px-8 pb-6 pt-4 border-t border-gray-200 mt-4">
          <span className="text-sm font-medium text-gray-600">Was this helpful?</span>
          <div className="flex gap-2">
            <button
              onClick={() => handleFeedback('yes')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-lg transition-all duration-250 hover:bg-soft-green/10 hover:border-soft-green hover:text-soft-green hover:-translate-y-0.5 hover:shadow-custom-sm active:translate-y-0"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8H2V14H4V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 8L6 2H9C9.53043 2 10.0391 2.21071 10.4142 2.58579C10.7893 2.96086 11 3.46957 11 4V6H13.5C13.6712 5.99987 13.8403 6.03671 13.9956 6.10798C14.1509 6.17926 14.2887 6.28318 14.3993 6.41241C14.5099 6.54164 14.5906 6.69308 14.6357 6.85632C14.6807 7.01956 14.689 7.19064 14.66 7.357L13.66 13.357C13.6154 13.6228 13.4742 13.8639 13.2619 14.0355C13.0496 14.2072 12.7804 14.2989 12.5 14.297H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Yes
            </button>
            <button
              onClick={() => handleFeedback('no')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-lg transition-all duration-250 hover:bg-hot-pink/10 hover:border-hot-pink hover:text-hot-pink hover:-translate-y-0.5 hover:shadow-custom-sm active:translate-y-0"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 8H14V2H12V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8L10 14H7C6.46957 14 5.96086 13.7893 5.58579 13.4142C5.21071 13.0391 5 12.5304 5 12V10H2.5C2.32877 10.0001 2.15968 9.96329 2.00442 9.89202C1.84915 9.82074 1.71126 9.71682 1.60068 9.58759C1.49011 9.45836 1.40939 9.30692 1.36433 9.14368C1.31928 8.98044 1.31103 8.80936 1.34 8.643L2.34 2.643C2.38458 2.37717 2.52583 2.13614 2.73812 1.96448C2.95041 1.79283 3.21959 1.70108 3.5 1.703H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              No
            </button>
          </div>
          {showThanks && (
            <span className="ml-3 text-sm text-soft-green font-medium animate-fade-in">
              Thanks for your feedback!
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
