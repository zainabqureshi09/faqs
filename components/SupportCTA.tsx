export default function SupportCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="bg-white rounded-2xl p-12 md:p-16 text-center shadow-custom-xl border-2 border-transparent relative overflow-hidden">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-primary -z-10" />
          <div className="absolute inset-[2px] rounded-2xl bg-white" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Still need help?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues you may have
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-primary rounded-xl border-2 border-transparent shadow-custom-md transition-all duration-250 hover:-translate-y-0.5 hover:shadow-custom-lg active:translate-y-0">
                Contact Support
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-800 bg-white border-2 border-gray-300 rounded-xl shadow-custom-sm transition-all duration-250 hover:bg-gray-50 hover:border-gray-400 hover:-translate-y-0.5 hover:shadow-custom-md active:translate-y-0">
                Chat With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
