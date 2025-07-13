import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 gradient-text tracking-tight text-center lg:text-left">
              About Your Coach
            </h2>
            <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4 text-primary-dark tracking-tight text-center lg:text-left">
              Coach Pallab Bhattacharjee (FIDE Rating: 1550)
            </h3>
            <p className="font-body text-base sm:text-lg text-gray-text mb-4 sm:mb-6 font-light leading-relaxed tracking-wide text-center lg:text-left">
              Pallab Bhattacharjee is a professional chess player with over 15
              years of playing experience. He was awarded District Champion and
              State Runner-up and achieved his FIDE rating in 2015. With more
              than 7 years of coaching experience, Pallab enjoys sharing his
              knowledge with students through both online and offline coaching
              sessions.
            </p>
            <p className="font-body text-base sm:text-lg text-gray-text mb-6 sm:mb-8 font-light leading-relaxed tracking-wide text-center lg:text-left">
              Whether you're a complete beginner learning how pieces move or an
              advanced player seeking to break through rating plateaus, Pallab
              tailors each lesson to your specific needs and learning style,
              focusing on understanding patterns, developing tactical vision,
              and building strong positional foundations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-neutral-light rounded-lg border border-gray-200">
                <div className="text-xl sm:text-2xl mb-2">🏆</div>
                <div className="font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base">
                  District Champion
                </div>
                <div className="font-body text-xs sm:text-sm text-gray-text font-light tracking-wide">
                  State Runner-up
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-neutral-light rounded-lg border border-gray-200">
                <div className="text-xl sm:text-2xl mb-2">📚</div>
                <div className="font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base">
                  10+ Years
                </div>
                <div className="font-body text-xs sm:text-sm text-gray-text font-light tracking-wide">
                  Coaching Experience
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Coach photo */}
            <div
              className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-200"
              style={{ aspectRatio: "853/1280" }}
            >
              <img
                src="main.jpeg"
                alt="Chess Coach"
                className="w-full h-full object-cover"
                width={853}
                height={1280}
              />
            </div>
            {/* Floating chess pieces decoration */}
            <div className="hidden sm:block absolute -top-3 sm:-top-4 -right-3 sm:-right-4 text-2xl sm:text-3xl lg:text-4xl opacity-30 chess-piece-float text-yellow-500">
              ♜
            </div>
            <div
              className="hidden sm:block absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 text-2xl sm:text-3xl lg:text-4xl opacity-30 chess-piece-float text-primary-dark"
              style={{ animationDelay: "2s" }}
            >
              ♝
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
