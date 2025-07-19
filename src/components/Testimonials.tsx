import React, { useState } from "react";

interface Student {
  id: number;
  year: string;
  image: string;
  description: string;
  testimonial: string;
}

const Testimonials = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const prizeWinners: Student[] = [
    {
      id: 1,
      year: "2025",
      image: "/test1.jpeg",
      description:
        "Rapid Chess Competition 2025 winner, showcasing exceptional speed and accuracy in tactical combinations.",
      testimonial:
        "The training here transformed my game completely. I learned to think faster and calculate deeper under time pressure!",
    },
    {
      id: 2,
      year: "2024",
      image: "/test2.jpeg",
      description:
        "Rapid Chess Competition 2024 medalist, known for brilliant endgame techniques and time management.",
      testimonial:
        "The coaching helped me develop incredible time management skills. Now I can play complex positions confidently in rapid games.",
    },
    {
      id: 3,
      year: "2023",
      image: "/test3.jpeg",
      description:
        "Rapid Chess Competition 2023 winner, demonstrated outstanding opening preparation and middle game strategy.",
      testimonial:
        "My opening repertoire expanded dramatically. The strategic concepts I learned here gave me a huge advantage in competitions.",
    },
    {
      id: 4,
      year: "2022",
      image: "/test4.jpeg",
      description:
        "Rapid Chess Competition 2022 medalist, recognized for creative tactical solutions and mental resilience.",
      testimonial:
        "The tactical training was incredible. I can now spot combinations that I would have missed before. My calculation improved tremendously.",
    },
    {
      id: 5,
      year: "2021",
      image: "/test5.jpeg",
      description:
        "Rapid Chess Competition 2021 winner, celebrated for aggressive attacking style and precise calculations.",
      testimonial:
        "Learning aggressive attacking patterns changed my style completely. I went from defensive player to a feared attacker!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-emerald-400">Rapid Chess Competition</span>{" "}
            Champions
          </h2>
          <p className="font-body text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Hear directly from our prize-winning students about their journey to
            success in the Rapid Chess Competition (2021-2025)
          </p>
        </div>

        {/* Prize Winners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {prizeWinners.map((student) => (
            <div
              key={student.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedStudent(student)}
            >
              {/* Student Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={student.image}
                  alt={`Student ${student.year}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                {/* Year Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold bg-emerald-500 text-emerald-900">
                  {student.year}
                </div>

                {/* Trophy Icon */}
                <div className="absolute top-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2L7.5 8H2l4.5 3.5L5 18l5-4 5 4-1.5-6.5L18 8h-5.5L10 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Student Info */}
                <div className="mb-4">
                  <h4 className="font-display text-white font-bold text-lg mb-1">
                    Student Champion
                  </h4>
                  <p className="font-body text-emerald-400 text-sm font-semibold mb-1">
                    {student.year}
                  </p>
                  <p className="font-body text-slate-400 text-xs">
                    Rapid Chess Competition
                  </p>
                </div>

                {/* Testimonial */}
                <p className="font-body text-slate-300 text-sm italic leading-relaxed mb-4">
                  "{student.testimonial}"
                </p>

                {/* Rating Stars */}
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
              100+
            </div>
            <div className="font-body text-slate-300 font-light">
              Championship Winners
            </div>
          </div>
          <div className="text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
              6+
            </div>
            <div className="font-body text-slate-300 font-light">
              Years of Excellence
            </div>
          </div>
          <div className="text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
              100%
            </div>
            <div className="font-body text-slate-300 font-light">
              Student Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Student Details */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white z-10 bg-slate-900/50 rounded-full p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={selectedStudent.image}
                  alt={`Student ${selectedStudent.year}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 bg-emerald-500 text-emerald-900">
                  {selectedStudent.year}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Student Champion
                </h3>
                <p className="font-body text-emerald-400 font-semibold text-lg mb-4">
                  Rapid Chess Competition {selectedStudent.year}
                </p>
                <p className="font-body text-slate-300 leading-relaxed mb-4">
                  {selectedStudent.description}
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="font-display text-lg font-semibold text-white mb-2">
                    Student Testimonial
                  </h4>
                  <p className="font-body text-slate-300 italic leading-relaxed">
                    "{selectedStudent.testimonial}"
                  </p>
                  <div className="flex mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
