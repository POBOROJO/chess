import React from "react";

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-neutral-light to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text tracking-tight">
            🧠 Coaching Services – Choose Your Learning Style!
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-gray-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Flexible learning options designed to fit your schedule and budget
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Group Classes */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover-lift border border-gray-100 relative">
            <div className="text-center mb-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-4">👥</div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-primary-dark tracking-tight mb-2">
                Group Classes
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-text font-light tracking-wide">
                Learn with peers in interactive sessions
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start">
                <span className="text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  📚
                </span>
                <div>
                  <div className="font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base">
                    Levels:
                  </div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">
                    Beginner, Intermediate, Advanced
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  📋
                </span>
                <div>
                  <div className="font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base">
                    Topic Structure:
                  </div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">
                    Topic will be shared before each session
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  🎯
                </span>
                <div>
                  <div className="font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base">
                    Frequency:
                  </div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">
                    8 live chess classes every month
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-2xl mr-2">
                    💸
                  </span>
                  <div>
                    <div className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-primary-dark tracking-tight">
                      ₹2800/month
                    </div>
                    <div className="font-body text-xs sm:text-sm text-red-600 font-medium tracking-wide">
                      (25% Discount)
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-body text-gray-text font-light tracking-wide text-sm">
                    or
                  </div>
                  <div className="flex items-center justify-center mt-1">
                    <span className="text-base sm:text-lg lg:text-xl mr-2">
                      💸
                    </span>
                    <div>
                      <div className="font-display text-base sm:text-lg lg:text-xl font-bold text-emerald-600 tracking-tight">
                        ₹2100/month
                      </div>
                      <div className="font-body text-xs sm:text-sm text-emerald-600 font-medium tracking-wide">
                        if paid upfront
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* One-to-One Coaching */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover-lift border border-gray-100 relative">
            {/* Popular badge */}
            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-emerald-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide">
                Most Popular
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-4">👨‍🏫</div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-primary-dark tracking-tight mb-2">
                One-to-One Coaching
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-text font-light tracking-wide">
                Personalized attention for faster progress
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start">
                <span className="text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  📚
                </span>
                <div>
                  <div className="font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base">
                    Levels:
                  </div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">
                    Beginner, Intermediate, Advanced
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  🤝
                </span>
                <div>
                  <div className="font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base">
                    Topic Structure:
                  </div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">
                    Topic chosen in collaboration with student
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  🎯
                </span>
                <div>
                  <div className="font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base">
                    Frequency:
                  </div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">
                    4 live chess classes every month
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-2xl mr-2">
                    💸
                  </span>
                  <div>
                    <div className="font-display text-base sm:text-lg lg:text-xl font-bold text-primary-dark tracking-tight">
                      ₹6400 or ₹3200/month
                    </div>
                    <div className="font-body text-xs sm:text-sm text-gray-text font-light tracking-wide">
                      (Monthly rate)
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-body text-gray-text font-light tracking-wide text-sm">
                    or
                  </div>
                  <div className="flex items-center justify-center mt-1">
                    <span className="text-base sm:text-lg lg:text-xl mr-2">
                      💸
                    </span>
                    <div>
                      <div className="font-display text-base sm:text-lg lg:text-xl font-bold text-emerald-600 tracking-tight">
                        ₹4800 or ₹2400/month
                      </div>
                      <div className="font-body text-xs sm:text-sm text-emerald-600 font-medium tracking-wide">
                        (with 25% Discount)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 sm:p-6 rounded-2xl border border-emerald-200 max-w-3xl mx-auto">
            <p className="font-body text-base sm:text-lg text-emerald-800 mb-4 font-medium tracking-wide">
              👉 Limited slots available! Enroll now and take your chess skills
              to the next level.
            </p>
            <button
              onClick={scrollToContact}
              className="font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift transition-all duration-300 tracking-wide shadow-lg"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
