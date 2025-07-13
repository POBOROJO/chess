import React from 'react'

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We discuss your chess goals and current skill level",
      icon: "💬"
    },
    {
      number: "02",
      title: "Skill Assessment",
      description: "Play a game to evaluate your strengths and areas for improvement",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Custom Plan",
      description: "Receive a personalized learning plan tailored to your needs",
      icon: "📋"
    },
    {
      number: "04",
      title: "Regular Lessons",
      description: "Consistent coaching sessions with progress tracking",
      icon: "📈"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text tracking-tight">
            How It Works
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-gray-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            A simple, proven process to accelerate your chess improvement
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden lg:block absolute top-12 sm:top-14 lg:top-16 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-dark text-white rounded-full flex items-center justify-center font-display text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 tracking-tight">
                  {step.number}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{step.icon}</div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary-dark tracking-tight">{step.title}</h3>
                <p className="font-body text-sm sm:text-base text-gray-text font-light leading-relaxed tracking-wide">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="font-display bg-primary-dark hover:bg-primary-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift transition-all duration-300 tracking-wide">
            Start Your Chess Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default Process