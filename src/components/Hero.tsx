const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Professional Chess Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Professional wooden chess set with detailed pieces on elegant board"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>
        {/* Additional subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-slate-900/20"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 fade-in-up text-white tracking-tighter leading-none">
              Master Chess with
              <span className="block bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Expert Coaching
              </span>
            </h1>

            <p className="font-body text-lg sm:text-xl lg:text-2xl text-slate-200 mb-6 sm:mb-8 fade-in-up stagger-1 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
              Personalized chess instruction for players of all levels. From
              beginner fundamentals to advanced strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 fade-in-up stagger-2 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift transition-all duration-300 shadow-lg tracking-wide"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-display border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift transition-all duration-300 backdrop-blur-sm tracking-wide"
              >
                View Lessons
              </button>
            </div>
          </div>

          {/* Right Column - Feature Highlights */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 tracking-tight text-center lg:text-left">
                Why Choose Talent Chess Academy?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-white text-lg sm:text-xl flex-shrink-0">
                    ♔
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white tracking-tight text-sm sm:text-base">
                      Experienced, FIDE Rated Trainer
                    </div>
                    <div className="font-body text-slate-300 text-xs sm:text-sm font-light tracking-wide">
                      Professional certified instructor
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-white text-lg sm:text-xl flex-shrink-0">
                    ♕
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white tracking-tight text-sm sm:text-base">
                      Best Online Live Chess Learning Platform
                    </div>
                    <div className="font-body text-slate-300 text-xs sm:text-sm font-light tracking-wide">
                      Interactive digital classroom
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-white text-lg sm:text-xl flex-shrink-0">
                    ♖
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white tracking-tight text-sm sm:text-base">
                      Personalised Learning
                    </div>
                    <div className="font-body text-slate-300 text-xs sm:text-sm font-light tracking-wide">
                      Customized to your needs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chess pieces decoration */}
            <div
              className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg chess-piece-float leading-none"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
              }}
            >
              ♔
            </div>
            <div
              className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg chess-piece-float leading-none"
              style={{
                animationDelay: "2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
              }}
            >
              ♞
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
