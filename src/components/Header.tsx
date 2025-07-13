import React from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/image copy copy.png" 
              alt="Talent Chess Academy" 
              className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-3 rounded-full object-cover border-2 border-emerald-500"
            />
            <div>
              <h1 className="font-display text-xl font-bold text-white tracking-tight">
                Talent Chess Academy
              </h1>
              <p className="font-body text-xs sm:text-sm text-slate-300 font-light tracking-wide">
                Online & Offline Coaching
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#about" className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer">About</a>
            <a href="#services" className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer">Services</a>
            <a href="#testimonials" className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer">Testimonials</a>
            <a href="#contact" className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer">Contact</a>
          </nav>
          
          {/* Desktop CTA Button */}
          <button className="hidden sm:block font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-300 tracking-wide text-sm lg:text-base">
            Book a Free Lesson
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#about" 
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 tracking-wide text-center mt-2">
                Book a Free Lesson
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header