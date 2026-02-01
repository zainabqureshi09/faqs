'use client'

interface HeroSectionProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function HeroSection({ searchQuery, setSearchQuery }: HeroSectionProps) {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-50 py-20 md:py-24">
      {/* Abstract Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* Large Circle Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(255, 47, 146, 0.15) 0%, rgba(255, 111, 174, 0.1) 30%, rgba(143, 211, 168, 0.08) 60%, transparent 100%)'
          }}
        />
        
        {/* Angled Rectangle Top Right */}
        <div className="absolute -top-[100px] -right-[50px] w-[400px] h-[400px] rounded-2xl rotate-[25deg]"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 47, 146, 0.12) 0%, rgba(107, 207, 155, 0.08) 100%)'
          }}
        />
      </div>

      {/* Bottom Left Shape */}
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-2xl -rotate-[15deg] z-[1]"
        style={{
          background: 'linear-gradient(225deg, rgba(143, 211, 168, 0.15) 0%, rgba(107, 207, 155, 0.05) 100%)'
        }}
      />

      {/* Spotlight Highlight Effect Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] rounded-full blur-[40px] z-[1]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 47, 146, 0.08) 20%, rgba(255, 111, 174, 0.12) 50%, rgba(143, 211, 168, 0.08) 80%, transparent 100%)'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-[2] w-full text-center py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>
            
            {/* Bold Gradient Underline Effect */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[280px] h-[6px] bg-gradient-primary rounded-full shadow-pink-glow" />
            
            {/* Accent Dot */}
            <div className="hidden lg:block absolute left-[-50px] top-1/2 -translate-y-1/2 text-2xl text-gradient-primary animate-float-dot">
              ●
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Find quick answers to help you get the most out of our services and support
          </p>

          <div className="relative max-w-2xl mx-auto">
            <svg 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
            >
              <path 
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M19 19L14.65 14.65" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="w-full py-4 pl-12 pr-4 text-base text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-custom-md transition-all duration-250 ease-in-out placeholder:text-gray-400 focus:outline-none focus:border-hot-pink focus:shadow-custom-lg focus:ring-4 focus:ring-hot-pink/10 hover:border-gray-300"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
