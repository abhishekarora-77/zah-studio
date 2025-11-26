import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const instagramUrl = "https://www.instagram.com/zahsstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={scrollToTop} className="flex-shrink-0 flex items-center group focus:outline-none z-50">
              <span className="font-serif text-5xl font-bold text-pink-500 mr-2 group-hover:text-pink-600 transition-colors drop-shadow-sm">Z.</span>
              <div className="flex flex-col items-start">
                <span className={`font-serif text-xl font-bold tracking-wide transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'}`}>Zah’s Studio</span>
                <span className={`text-[10px] uppercase tracking-widest ${scrolled ? 'text-gray-500' : 'text-gray-500 md:text-white/80'}`}>Luxury Beauty</span>
              </div>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="tel:+19058784247" className={`transition font-medium flex items-center group ${scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-white'}`}>
                <i className={`fas fa-phone-alt mr-2 text-sm ${scrolled ? 'text-pink-400' : 'text-pink-200'}`}></i>
                +1 905-878-4247
              </a>
              <button onClick={() => scrollToSection('services')} className={`transition font-medium ${scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-white'}`}>Services</button>
              <button onClick={() => scrollToSection('gallery')} className={`transition font-medium ${scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-white'}`}>Work</button>
              <button onClick={() => scrollToSection('about')} className={`transition font-medium ${scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-white'}`}>About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-pink-300/50 transform hover:-translate-y-0.5 font-medium">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center z-50">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${scrolled ? 'text-gray-600' : 'text-gray-800'} hover:text-pink-600 focus:outline-none transition`}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => scrollToSection('services')} className="text-2xl font-serif font-bold text-gray-800 hover:text-pink-500">Services</button>
          <button onClick={() => scrollToSection('gallery')} className="text-2xl font-serif font-bold text-gray-800 hover:text-pink-500">Our Work</button>
          <button onClick={() => scrollToSection('about')} className="text-2xl font-serif font-bold text-gray-800 hover:text-pink-500">About</button>
          <a href="tel:+19058784247" className="text-xl text-gray-600 hover:text-pink-600 flex items-center">
             <i className="fas fa-phone-alt mr-3 text-pink-400"></i> +1 905-878-4247
          </a>
          <button onClick={() => scrollToSection('contact')} className="bg-pink-500 text-white text-xl px-10 py-4 rounded-full shadow-xl hover:bg-pink-600 transition">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Pink Salon Interior" 
            className="w-full h-full object-cover"
          />
          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-16 md:mt-0">
          <div className="animate-fade-in-up">
            <span className="inline-block py-2 px-4 rounded-full bg-white/80 backdrop-blur-sm text-pink-600 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm border border-pink-100">
              Welcome to Milton’s Finest
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              Zah’s Studio
              <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 font-light italic text-gray-700">Luxury Beauty & Glamour</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Premium lashes, hair, nails & skincare tailored just for you. 
              Step into a world of elegance and let us bring out your inner radiance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold tracking-wide shadow-lg hover:bg-pink-600 hover:shadow-pink-500/30 transition transform hover:-translate-y-1 hover:scale-105"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white/90 backdrop-blur-sm text-gray-800 border border-white px-10 py-4 rounded-full text-lg font-bold tracking-wide shadow-md hover:bg-white transition transform hover:-translate-y-1"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-pink-500 font-bold tracking-widest text-sm uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">Curated treatments designed for your ultimate transformation and relaxation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon="fa-eye" 
              title="Eyelash Extensions" 
              desc="Get fuller, fluttery lashes that last weeks. From classic to volume, we customize your look."
              color="bg-pink-50 text-pink-500"
            />
            <ServiceCard 
              icon="fa-scissors" 
              title="Hair Styling & Color" 
              desc="From balayage to precision cuts. Our experts create the perfect shade and style for you."
              color="bg-purple-50 text-purple-500"
            />
            <ServiceCard 
              icon="fa-hand-sparkles" 
              title="Nail Art & Care" 
              desc="Impeccable hygiene and stunning designs. Treat your hands and feet to luxury."
              color="bg-rose-50 text-rose-500"
            />
            <ServiceCard 
              icon="fa-spa" 
              title="Facials & Skincare" 
              desc="Rejuvenate your glow with customized facials targeting your specific skin needs."
              color="bg-blue-50 text-blue-400"
            />
            <ServiceCard 
              icon="fa-feather" 
              title="Brows & Waxing" 
              desc="Perfectly shaped brows and smooth skin. Gentle, precise, and professional."
              color="bg-orange-50 text-orange-400"
            />
             <ServiceCard 
              icon="fa-crown" 
              title="Bridal Packages" 
              desc="Complete beauty coordination for your special day. Look breathtaking walking down the aisle."
              color="bg-yellow-50 text-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">Real Results</h2>
              <p className="text-gray-500 text-lg">Swipe to see the magic we create everyday.</p>
            </div>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-pink-600 font-bold hover:text-pink-700 transition group mx-auto md:mx-0">
              <i className="fab fa-instagram text-2xl mr-2 group-hover:scale-110 transition-transform"></i> 
              Follow @zahsstudio
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <GalleryImage src="https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=600&q=80" alt="Lashes" label="Lashes" />
            <GalleryImage src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80" alt="Nails" label="Nails" />
            <GalleryImage src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80" alt="Hair Color" label="Hair Color" />
            <GalleryImage src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" alt="Facial" label="Facial" />
            <GalleryImage src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80" alt="Makeup" label="Makeup" />
            <GalleryImage src="https://images.unsplash.com/photo-1596178065248-208f3507b967?auto=format&fit=crop&w=600&q=80" alt="Styling" label="Styling" />
            <GalleryImage src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80" alt="Products" label="Care" />
            <GalleryImage src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=80" alt="Interior" label="Studio" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
               <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-pink-200 rounded-2xl z-0"></div>
               <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80" 
                alt="Zah's Studio Interior" 
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <i className="fas fa-quote-left text-5xl text-pink-100 mb-6 block"></i>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">Where Beauty Meets <span className="text-pink-500">Confidence</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                At Zah’s Studio, we believe beauty is about confidence. Located in the heart of Milton, our experienced stylists 
                bring out your best look with care, precision, and a touch of luxury. 
                We pride ourselves on a meticulously clean environment, premium products, and a warm, welcoming atmosphere 
                where you can truly relax.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left">
                <FeatureItem icon="fa-heart" text="Skilled & Caring Specialists" />
                <FeatureItem icon="fa-gem" text="Luxury, Instagram-worthy Results" />
                <FeatureItem icon="fa-pump-medical" text="Hygienic & Safe Environment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-pink-500 to-rose-400 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Client Love</h2>
            <div className="flex items-center justify-center gap-2 text-pink-100 mb-2">
              <div className="flex text-yellow-300 text-xl shadow-sm">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <span className="font-bold text-xl ml-2">4.9/5 Rating</span>
            </div>
            <p className="opacity-90 font-light text-lg">Based on 120+ Glowing Google Reviews</p>
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
          
          <div className="text-center mt-12">
            <a href="https://www.google.com/search?q=zah's+studio+milton" target="_blank" rel="noreferrer" className="inline-block border border-white/40 hover:bg-white hover:text-pink-500 text-white px-8 py-3 rounded-full transition font-semibold">
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Pricing Highlights</h2>
            <p className="text-gray-500">Transparent starting prices for our most popular services.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              <PriceItem service="Classic Eyelash Extensions" price="from $90" />
              <PriceItem service="Gel Manicure with Art" price="from $55" />
              <PriceItem service="Hair Colour & Cut Package" price="from $120" />
              <PriceItem service="Luxury Facial Treatment" price="from $85" />
              <PriceItem service="Eyebrow Shaping" price="from $15" />
              <PriceItem service="Full Face Waxing" price="from $45" />
            </div>
            <div className="mt-10 text-center border-t border-gray-100 pt-6">
               <p className="text-gray-500 italic mb-4">Pricing may vary based on hair length, design complexity, and customization.</p>
               <button onClick={() => scrollToSection('contact')} className="text-pink-600 font-bold hover:text-pink-700 underline underline-offset-4">Get a Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Contact Form */}
      <section id="contact" className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-start">
          
          <div className="w-full md:w-5/12">
             <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Book Your Visit</h2>
             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
               Ready to glow? Fill out the form and we'll confirm your appointment shortly.
             </p>
             
             <div className="space-y-6">
               <div className="flex items-start">
                 <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-xl flex-shrink-0 mt-1">
                   <i className="fas fa-map-marker-alt"></i>
                 </div>
                 <div className="ml-4">
                   <h4 className="font-bold text-gray-900">Our Studio</h4>
                   <p className="text-gray-600">653 Mockridge Terrace,<br/>Milton, ON L9T 8V7</p>
                 </div>
               </div>
               
               <div className="flex items-start">
                 <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-xl flex-shrink-0 mt-1">
                   <i className="fas fa-phone-alt"></i>
                 </div>
                 <div className="ml-4">
                   <h4 className="font-bold text-gray-900">Phone</h4>
                   <p className="text-gray-600">
                     <a href="tel:+19058784247" className="hover:text-pink-600 transition">+1 905-878-4247</a>
                   </p>
                   <p className="text-xs text-gray-400 mt-1">Call or Text for quick queries</p>
                 </div>
               </div>
               
               <div className="flex items-start">
                 <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-xl flex-shrink-0 mt-1">
                   <i className="fab fa-instagram"></i>
                 </div>
                 <div className="ml-4">
                   <h4 className="font-bold text-gray-900">Social</h4>
                   <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-pink-600 transition block">@zahsstudio</a>
                 </div>
               </div>
             </div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <form 
                className="space-y-5" 
                action="https://formspree.io/f/mwpdpeww" 
                method="POST"
              >
                <input type="hidden" name="_subject" value="New Appointment Request from Zah's Studio Website" />

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100 outline-none transition" 
                    placeholder="Jane Doe" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100 outline-none transition" 
                      placeholder="(555) 123-4567" 
                      required 
                    />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">Email (Optional)</label>
                     <input 
                       type="email" 
                       name="email"
                       className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100 outline-none transition" 
                       placeholder="jane@example.com" 
                     />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Interested In</label>
                  <select 
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100 outline-none transition"
                  >
                    <option value="Eyelash Extensions">Eyelash Extensions</option>
                    <option value="Hair Styling / Color">Hair Styling / Color</option>
                    <option value="Nails / Mani Pedi">Nails / Mani Pedi</option>
                    <option value="Facial / Skincare">Facial / Skincare</option>
                    <option value="Brows / Waxing">Brows / Waxing</option>
                    <option value="Bridal Package">Bridal Package</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date/Time</label>
                  <input 
                    type="text" 
                    name="preferred_time"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100 outline-none transition" 
                    placeholder="e.g. Friday afternoon" 
                  />
                </div>

                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-pink-200 transition transform hover:-translate-y-1 active:scale-95 mt-2">
                  Send Request
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">We'll contact you to confirm the exact time.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem q="Do I need to book in advance?" a="Yes, we recommend booking 24–48 hours ahead to secure your preferred slot, especially for weekends." />
            <FaqItem q="Can I reschedule my appointment?" a="Absolutely. Life happens! Just DM or call us at least 24 hours prior to your appointment." />
            <FaqItem q="Do you offer custom nail or beauty designs?" a="Yes! We love creativity. Bring a photo or just describe what you want, and we'll make it happen." />
            <FaqItem q="Where are you located exactly?" a="We are at 653 Mockridge Terrace, Milton, ON. There is parking available." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <div onClick={scrollToTop} className="flex items-center justify-center md:justify-start gap-2 mb-4 cursor-pointer group">
               <span className="font-serif text-4xl font-bold text-pink-500 group-hover:text-pink-400 transition-colors">Z.</span>
               <span className="font-serif text-3xl font-bold tracking-wide">Zah’s Studio</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
              Your destination for luxury beauty services in Milton. <br/>Experience the difference of care and quality.
            </p>
            <div className="mt-6 space-y-2">
              <a href="tel:+19058784247" className="block text-gray-400 hover:text-white transition">
                <i className="fas fa-phone-alt mr-2 text-pink-500"></i> +1 905-878-4247
              </a>
              <p className="text-gray-400">
                <i className="fas fa-map-marker-alt mr-2 text-pink-500"></i> Milton, ON L9T 8V7
              </p>
            </div>
          </div>
          
          <div className="flex space-x-8 mb-8 md:mb-0">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition transform hover:-translate-y-1">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-1">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition transform hover:-translate-y-1 border border-gray-700">
              <i className="fab fa-tiktok text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Zah’s Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

/* Sub-components */

const ServiceCard = ({ icon, title, desc, color }: { icon: string, title: string, desc: string, color: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 border border-gray-100 flex flex-col items-center text-center group transform hover:-translate-y-1">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-110 shadow-sm rotate-3 group-hover:rotate-6`}>
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-light">{desc}</p>
  </div>
);

const GalleryImage = ({ src, alt, label }: { src: string, alt: string, label: string }) => (
  <div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-md">
    <img src={src} alt={alt} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
      <span className="text-white font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition duration-300">{label}</span>
    </div>
  </div>
);

const FeatureItem = ({ icon, text }: { icon: string, text: string }) => (
  <div className="flex items-center md:justify-start justify-center p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition border border-gray-100">
    <i className={`fas ${icon} text-pink-500 text-xl mr-4`}></i>
    <span className="text-gray-700 font-semibold">{text}</span>
  </div>
);

const Testimonial = ({ quote, author, service }: { quote: string, author: string, service?: string }) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 flex flex-col hover:bg-white/20 transition duration-300">
    <div className="flex text-yellow-300 mb-4 text-xs">
      {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star mr-1"></i>)}
    </div>
    <p className="italic text-pink-50 mb-6 text-sm leading-relaxed flex-grow font-serif tracking-wide">"{quote}"</p>
    <div className="mt-auto border-t border-white/10 pt-4">
      <p className="font-bold text-white text-base">{author}</p>
      {service && <p className="text-pink-200 text-xs uppercase tracking-widest mt-1 opacity-80">{service}</p>}
    </div>
  </div>
);

const PriceItem = ({ service, price }: { service: string, price: string }) => (
  <div className="flex justify-between items-end border-b border-gray-100 pb-3 hover:border-pink-200 transition">
    <span className="text-gray-700 font-medium text-lg">{service}</span>
    <span className="text-pink-600 font-bold text-lg whitespace-nowrap ml-4">{price}</span>
  </div>
);

const FaqItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-pink-100 bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left px-6 py-5 bg-white hover:bg-gray-50 transition flex justify-between items-center"
      >
        <span className="font-bold text-gray-800 text-lg">{q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-500 transition-all ${isOpen ? 'rotate-180 bg-pink-100 text-pink-500' : ''}`}>
          <i className="fas fa-chevron-down text-sm"></i>
        </div>
      </button>
      <div 
        className={`px-6 bg-gray-50 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        {a}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);