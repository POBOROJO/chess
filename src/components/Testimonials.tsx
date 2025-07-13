import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: "1200 → 1600",
      text: "The coaching completely transformed my understanding of chess. I went from losing most games to winning consistently!",
      avatar: "👩"
    },
    {
      name: "Mike Chen",
      rating: "1800 → 2100",
      text: "Excellent analysis of my games helped me identify and fix recurring mistakes. Highly recommend!",
      avatar: "👨"
    },
    {
      name: "Emma Davis",
      rating: "Beginner → 1400",
      text: "Patient, clear explanations made learning chess enjoyable. Perfect for beginners like me.",
      avatar: "👧"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-neutral-light to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text tracking-tight">
            Student Success Stories
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-gray-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            See how our students have improved their chess skills and ratings
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover-lift border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl mr-3 sm:mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base">{testimonial.name}</h4>
                  <div className="font-display text-emerald-600 font-semibold tracking-tight text-xs sm:text-sm">{testimonial.rating}</div>
                </div>
              </div>
              <p className="font-body text-sm sm:text-base text-gray-text italic font-light leading-relaxed tracking-wide mb-3">"{testimonial.text}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-base sm:text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials