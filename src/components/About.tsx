import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 gradient-text tracking-tight text-center lg:text-left">
              About Your Coach
            </h2>
            <p className="font-body text-base sm:text-lg text-gray-text mb-4 sm:mb-6 font-light leading-relaxed tracking-wide text-center lg:text-left">
              With over 10 years of coaching experience and a FIDE rating of 2000+, I've helped hundreds of students improve their chess game. My teaching philosophy focuses on understanding patterns, developing tactical vision, and building strong positional foundations.
            </p>
            <p className="font-body text-base sm:text-lg text-gray-text mb-6 sm:mb-8 font-light leading-relaxed tracking-wide text-center lg:text-left">
              Whether you're a complete beginner learning how pieces move or an advanced player seeking to break through rating plateaus, I tailor each lesson to your specific needs and learning style.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-neutral-light rounded-lg border border-gray-200">
                <div className="text-xl sm:text-2xl mb-2">🏆</div>
                <div className="font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base">FIDE Master</div>
                <div className="font-body text-xs sm:text-sm text-gray-text font-light tracking-wide">Certified Instructor</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-neutral-light rounded-lg border border-gray-200">
                <div className="text-xl sm:text-2xl mb-2">📚</div>
                <div className="font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base">10+ Years</div>
                <div className="font-body text-xs sm:text-sm text-gray-text font-light tracking-wide">Teaching Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Placeholder for coach photo */}
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-neutral-light to-gray-100 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl border border-gray-200">
              ♔
            </div>
            {/* Floating chess pieces decoration */}
            <div className="hidden sm:block absolute -top-3 sm:-top-4 -right-3 sm:-right-4 text-2xl sm:text-3xl lg:text-4xl opacity-30 chess-piece-float text-yellow-500">♜</div>
            <div className="hidden sm:block absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 text-2xl sm:text-3xl lg:text-4xl opacity-30 chess-piece-float text-primary-dark" style={{animationDelay: '2s'}}>♝</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About