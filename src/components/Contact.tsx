import React, { useState } from 'react'
import { Facebook, Twitter, Youtube } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setShowThankYou(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          level: '',
          message: ''
        })
      } else {
        alert('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890' // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I\'m interested in chess coaching lessons. Could you please provide more information?')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (showThankYou) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-12 rounded-2xl border border-emerald-200 max-w-2xl mx-auto">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="font-display text-3xl font-bold mb-4 text-emerald-800 tracking-tight">
                Thank You!
              </h2>
              <p className="font-body text-lg text-emerald-700 mb-6 font-light leading-relaxed tracking-wide">
                Your message has been sent successfully! I'll get back to you within 24 hours to discuss your chess coaching needs.
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="font-display bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 tracking-wide"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text tracking-tight">
            Ready to Improve Your Chess?
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-gray-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Get in touch to schedule your free consultation and start your chess journey
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary-dark tracking-tight">Contact Information</h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <span className="text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4">📧</span>
                <div>
                  <div className="font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base">Email</div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">coach@chessmasterclass.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4">📱</span>
                <div>
                  <div className="font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base">Phone</div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4">🌐</span>
                <div>
                  <div className="font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base">Online Platforms</div>
                  <div className="font-body text-gray-text font-light tracking-wide text-xs sm:text-sm">Lichess • Chess.com</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Section */}
            <div className="bg-green-50 p-4 sm:p-6 rounded-2xl border border-green-100 mb-6 sm:mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-green-800 tracking-tight text-sm sm:text-base">WhatsApp</div>
                    <div className="font-body text-green-600 font-light tracking-wide text-xs sm:text-sm">+1 (555) 123-4567</div>
                  </div>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="font-display bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-1 sm:gap-2 tracking-wide text-xs sm:text-sm"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                  </svg>
                  <span className="hidden sm:inline">Have a chat</span>
                  <span className="sm:hidden">Chat</span>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary-dark tracking-tight">Follow Me</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-dark text-white rounded-full hover:bg-primary-light transition-colors flex items-center justify-center">
                  <Facebook size={16} className="sm:w-5 sm:h-5" />
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-dark text-white rounded-full hover:bg-primary-light transition-colors flex items-center justify-center">
                  <Twitter size={16} className="sm:w-5 sm:h-5" />
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-dark text-white rounded-full hover:bg-primary-light transition-colors flex items-center justify-center">
                  <Youtube size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <form 
              onSubmit={handleSubmit} 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-4 sm:space-y-6 needs-validation"
              noValidate
            >
              {/* Web3Forms Configuration */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Chess Coaching Inquiry" />
              <input type="hidden" name="from_name" value="Chess Coaching Website" />
              <input type="checkbox" name="botcheck" style={{display: 'none'}} />
              
              <div>
                <label htmlFor="name" className="block font-body text-xs sm:text-sm font-medium text-primary-dark mb-1 sm:mb-2 tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="font-body w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent tracking-wide transition-colors text-sm sm:text-base"
                  required
                />
                <div className="invalid-feedback text-red-600 text-sm mt-1 hidden">
                  Please provide your full name.
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block font-body text-xs sm:text-sm font-medium text-primary-dark mb-1 sm:mb-2 tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="font-body w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent tracking-wide transition-colors text-sm sm:text-base"
                  required
                />
                <div className="invalid-feedback text-red-600 text-sm mt-1 hidden">
                  Please provide a valid email address.
                </div>
              </div>
              
              <div>
                <label htmlFor="level" className="block font-body text-xs sm:text-sm font-medium text-primary-dark mb-1 sm:mb-2 tracking-wide">
                  Chess Level *
                </label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="font-body w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent tracking-wide transition-colors text-sm sm:text-base"
                  required
                >
                  <option value="">Select your level</option>
                  <option value="Beginner (0-800)">Beginner (0-800)</option>
                  <option value="Intermediate (800-1400)">Intermediate (800-1400)</option>
                  <option value="Advanced (1400-2000)">Advanced (1400-2000)</option>
                  <option value="Expert (2000+)">Expert (2000+)</option>
                </select>
                <div className="invalid-feedback text-red-600 text-sm mt-1 hidden">
                  Please select your chess level.
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-body text-xs sm:text-sm font-medium text-primary-dark mb-1 sm:mb-2 tracking-wide">
                  Message / Chess Goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="font-body w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent tracking-wide transition-colors text-sm sm:text-base resize-none"
                  placeholder="Tell me about your chess goals, current challenges, or any specific areas you'd like to improve..."
                  required
                ></textarea>
                <div className="invalid-feedback text-red-600 text-sm mt-1 hidden">
                  Please tell us about your chess goals.
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-display w-full bg-primary-dark hover:bg-primary-light text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover-lift transition-all duration-300 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              <p className="text-xs sm:text-sm text-gray-text text-center font-light tracking-wide">
                * Required fields. I'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact