import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={scrollToTop} className="flex-shrink-0 flex items-center group focus:outline-none">
              <span className="font-serif text-4xl font-bold text-pink-400 mr-2 group-hover:text-pink-500 transition-colors">Z.</span>
              <span className="font-serif text-2xl font-bold text-gray-800 tracking-wide group-hover:text-gray-600 transition-colors">Zah’s Studio</span>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-pink-600 transition">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-pink-600 transition">Work</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-pink-600 transition">About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full transition shadow-md hover:shadow-lg">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-pink-600 focus:outline-none">
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-1 shadow-lg">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-md">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-3 text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-md">Our Work</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-3 text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-md">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-3 text-pink-600 font-bold hover:bg-pink-50 rounded-md">Book Appointment</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold tracking-wide mb-6">
            WELCOME TO MILTON’S FINEST
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Zah’s Studio — <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Luxury Beauty</span> & Glamour
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium lashes, hair, nails & skincare tailored just for you. 
            Step into a world of elegance and let us bring out your inner radiance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Book Your Appointment
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full text-lg font-semibold shadow-sm hover:bg-gray-50 transition"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-pink-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Premium Services</h2>
            <p className="text-gray-500">Curated treatments for your ultimate transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon="fa-eye" 
              title="Eyelash Extensions & Lifts" 
              desc="Get fuller, fluttery lashes that last weeks without mascara."
            />
            <ServiceCard 
              icon="fa-scissors" 
              title="Hair Styling & Coloring" 
              desc="From balayage to precision cuts, achieve your dream hair."
            />
            <ServiceCard 
              icon="fa-hand-sparkles" 
              title="Nail Art & Mani/Pedi" 
              desc="Impeccable hygiene and stunning designs for your hands & feet."
            />
            <ServiceCard 
              icon="fa-spa" 
              title="Facials & Skincare" 
              desc="Rejuvenate your glow with our customized luxury facials."
            />
            <ServiceCard 
              icon="fa-feather" 
              title="Brows & Waxing" 
              desc="Perfectly shaped brows and smooth skin for a polished look."
            />
             <ServiceCard 
              icon="fa-crown" 
              title="Bridal Packages" 
              desc="Complete beauty coordination for your special day."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Real Results</h2>
            <p className="text-gray-500">Swipe to see the magic we create everyday</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GalleryImage src="https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=400&q=80" alt="Lashes" />
            <GalleryImage src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=400&q=80" alt="Nails" />
            <GalleryImage src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80" alt="Hair Color" />
            <GalleryImage src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80" alt="Facial" />
          </div>
          <div className="text-center mt-8">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700">
              <i className="fab fa-instagram mr-2"></i> See more on Instagram @zahsstudio
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <i className="fas fa-quote-left text-4xl text-pink-200 mb-6"></i>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">Where Beauty Meets Confidence</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Zah’s Studio, we believe beauty is about confidence. Located in the heart of Milton, our experienced stylists 
            bring out your best look with care, precision, and a touch of luxury. 
            We pride ourselves on a meticulously clean environment, premium products, and a warm, welcoming atmosphere 
            where you can truly relax.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <FeatureItem icon="fa-heart" text="Skilled & Caring Specialists" />
            <FeatureItem icon="fa-gem" text="Luxury, Instagram-worthy Results" />
            <FeatureItem icon="fa-pump-medical" text="Hygienic & Safe Environment" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Client Love</h2>
            <div className="flex items-center justify-center gap-2 text-pink-100 mb-2">
              <div className="flex text-yellow-300 text-lg">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <span className="font-semibold text-lg">4.9/5 Rating</span>
            </div>
            <p className="opacity-90">Based on 120+ Google Reviews</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Testimonial 
              quote="Absolutely love my experience with Uzma every time. She is so kind, attentive, and truly listens to what I want. The service is always exceptional—my hair looks amazing!"
              author="Evade"
              service="Hair"
            />
            <Testimonial 
              quote="No exaggerations when i say this was hands down one of the best haircuts i’ve ever had. Uzma is super sweet... most perfect voluminous layers."
              author="Annie Qayyum"
              service="Haircut"
            />
            <Testimonial 
              quote="Literally saved my hair! Came to Zahs studio with a messed up color job... She not only got all the purple out but was able to give me a beautiful copper look."
              author="Line Brideau"
              service="Color Correction"
            />
            <Testimonial 
              quote="I got my lashes done here for the first time and I am in love with them. Zahra is definitely my one and only lash tech now. Best service provided."
              author="Nida Kiyani"
              service="Lashes"
            />
            <Testimonial 
              quote="My facial was soooo satisfying that I had a 5 mins power nap during the facial... I loved my haircut as she delivered exactly what I was looking for."
              author="Wajeeha Arsalan"
              service="Facial & Hair"
            />
             <Testimonial 
              quote="I’ve been hunting for a go-to brow threading place... did an amazing job. My brows are even and clean, so happy. Will be coming back!"
              author="Kristina Sorgiovanni"
              service="Brows"
            />
            <Testimonial 
              quote="This woman is beyond amazing! Her expertise is unmatched and it’s a life changing experience... Highly recommend her and please listen to her input!"
              author="Sandie Kang"
              service="Transformation"
            />
            <Testimonial 
              quote="I went in for a haircut and colour, and she was absolutely amazing. She understood exactly what I wanted... best experience at this salon!"
              author="Abrish Faisal"
              service="Haircut & Color"
            />
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Pricing Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <PriceItem service="Classic Eyelash Extensions" price="from $90" />
            <PriceItem service="Gel Manicure with Art" price="from $55" />
            <PriceItem service="Hair Colour & Cut Package" price="from $120" />
            <PriceItem service="Luxury Facial Treatment" price="from $85" />
          </div>
          <p className="text-gray-500 italic">Please contact us for a detailed price list tailored to your specific needs.</p>
        </div>
      </section>

      {/* Booking / Contact Form */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Book Your Visit</h2>
              <p className="text-gray-500">Ready to glow? Fill out the form below.</p>
            </div>
            
            <form 
              className="space-y-4" 
              action="https://formspree.io/f/mwpdpeww" 
              method="POST"
            >
              {/* Formspree Subject */}
              <input type="hidden" name="_subject" value="New Appointment Request from Zah's Studio Website" />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition" 
                  placeholder="Jane Doe" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition" 
                    placeholder="(555) 123-4567" 
                    required 
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                   <input 
                     type="email" 
                     name="email"
                     className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition" 
                     placeholder="jane@example.com" 
                   />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                >
                  <option value="Eyelash Extensions">Eyelash Extensions</option>
                  <option value="Hair Styling / Color">Hair Styling / Color</option>
                  <option value="Nails / Mani Pedi">Nails / Mani Pedi</option>
                  <option value="Facial / Skincare">Facial / Skincare</option>
                  <option value="Brows / Waxing">Brows / Waxing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date/Time</label>
                <input 
                  type="text" 
                  name="preferred_time"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition" 
                  placeholder="e.g. Friday afternoon" 
                />
              </div>

              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg shadow-md transition transform active:scale-95 mt-4">
                Send & Get Booking
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-2"><i className="fas fa-map-marker-alt text-pink-500 mr-2"></i> Milton, Ontario, Canada</p>
              <a href="https://instagram.com" className="text-gray-600 hover:text-pink-600 transition"><i className="fab fa-instagram text-xl mr-2"></i> @zahsstudio</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FaqItem q="Do I need to book in advance?" a="Yes, we recommend booking 24–48 hours ahead to secure your preferred slot, especially for weekends." />
            <FaqItem q="Can I reschedule my appointment?" a="Absolutely. Life happens! Just DM or call us at least 24 hours prior to your appointment." />
            <FaqItem q="Do you offer custom nail or beauty designs?" a="Yes! We love creativity. Bring a photo or just describe what you want, and we'll make it happen." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div onClick={scrollToTop} className="flex items-center justify-center md:justify-start gap-2 mb-2 cursor-pointer group">
               <span className="font-serif text-3xl font-bold text-pink-400 group-hover:text-pink-500 transition-colors">Z.</span>
               <span className="font-serif text-2xl font-bold tracking-wide">Zah’s Studio</span>
            </div>
            <p className="text-gray-400 text-sm">Luxury beauty services in Milton, ON.</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram text-2xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook text-2xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-tiktok text-2xl"></i></a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Zah’s Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

/* Sub-components */

const ServiceCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-pink-50 flex flex-col items-center text-center group">
    <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-pink-100 transition">
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const GalleryImage = ({ src, alt }: { src: string, alt: string }) => (
  <div className="aspect-square rounded-lg overflow-hidden relative group">
    <img src={src} alt={alt} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>
  </div>
);

const FeatureItem = ({ icon, text }: { icon: string, text: string }) => (
  <div className="flex flex-col items-center">
    <i className={`fas ${icon} text-pink-400 text-2xl mb-3`}></i>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

const Testimonial = ({ quote, author, service }: { quote: string, author: string, service?: string }) => (
  <div className="bg-white/10 p-6 rounded-xl border border-white/20 flex flex-col">
    <div className="flex text-yellow-300 mb-3 text-xs">
      {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star mr-1"></i>)}
    </div>
    <p className="italic text-pink-50 mb-4 text-sm leading-relaxed flex-grow">"{quote}"</p>
    <div className="mt-auto">
      <p className="font-bold text-white text-sm">— {author}</p>
      {service && <p className="text-pink-200 text-xs uppercase tracking-wide mt-1">{service}</p>}
    </div>
  </div>
);

const PriceItem = ({ service, price }: { service: string, price: string }) => (
  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
    <span className="text-gray-700 font-medium">{service}</span>
    <span className="text-pink-600 font-bold">{price}</span>
  </div>
);

const FaqItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-pink-50 transition flex justify-between items-center"
      >
        <span className="font-bold text-gray-700">{q}</span>
        <i className={`fas fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''} text-gray-400`}></i>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white text-gray-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);