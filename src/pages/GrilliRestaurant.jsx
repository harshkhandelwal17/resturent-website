import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, MapPin, Clock, Phone, Mail, ArrowUp, Calendar, User, Star, Play, Award, Users, Utensils, Coffee, Smartphone, Truck, ShoppingBag, Heart, Gift, Zap } from 'lucide-react';

// Preloader Component
const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 z-50 flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-32 h-32 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-b-white rounded-full animate-spin animate-reverse"></div>
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider mb-4">उसलवाला</h1>
        <p className="text-white/80 text-lg animate-pulse">Authentic Indian Flavors</p>
      </div>
    </div>
  );
};

// tastyaana Promotion Banner
const TastyaanaPromo = () => (
  <div className="bg-gradient-to-r from-green-600 via-green-500 relative top-15 to-emerald-500 py-3  overflow-hidden ">
    <div className="absolute inset-0 opacity-20">
      <div className="w-full h-full bg-white/10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Smartphone className="text-white" size={20} />
          </div>
          <div className="text-white">
            <span className="font-bold">Now Available on</span>
            <span className="mx-2 text-2xl font-bold text-yellow-300">tastyaana</span>
            <span className="text-sm">- Your favorite food delivery partner!</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
          <Truck className="text-white" size={16} />
          <span className="text-white text-sm font-semibold">Free Delivery</span>
        </div>
      </div>
    </div>
  </div>
);

// TopBar Component
// const TopBar = ({ isHeaderActive }) => (
//   <div className={`hidden lg:block w-full bg-black/90 backdrop-blur-sm border-b border-orange-500/20 z-50 py-2 transition-all duration-300 ${isHeaderActive ? 'fixed top-0' : 'relative'}`}>
//     <div className="container mx-auto px-6">
//       <div className="flex justify-center items-center gap-6 text-xs">
//         <div className="flex items-center gap-2 text-white/80 hover:text-orange-400 transition-colors">
//           <MapPin size={14} className="text-orange-500" />
//           <span>Shop No. 12, Indore, Madhya Pradesh, 452001</span>
//         </div>
//         <div className="w-px h-3 bg-white/20"></div>
//         <div className="flex items-center gap-2 text-white/80 hover:text-orange-400 transition-colors">
//           <Clock size={14} className="text-orange-500" />
//           <span>Daily: 11:00 AM - 11:00 PM</span>
//         </div>
//         <div className="w-px h-3 bg-white/20"></div>
//         <a href="tel:+919876543210" className="flex items-center gap-2 text-white/80 hover:text-orange-400 transition-colors">
//           <Phone size={14} className="text-orange-500" />
//           <span>+918989266180</span>
//         </a>
//       </div>
//     </div>
//   </div>
// );
const TopBar = ({ isHeaderActive }) => (
  <div className={`hidden lg:block w-full bg-white border-b border-gray-200 z-50 py-3 transition-all duration-300 font-['Plus_Jakarta_Sans'] ${isHeaderActive ? 'fixed top-0 shadow-sm' : 'relative'}`}>
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex justify-center items-center gap-8 text-sm">
        <div className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
          <MapPin size={16} className="text-amber-600" />
          <span>Shop No. 12, Indore, Madhya Pradesh, 452001</span>
        </div>
        <div className="w-px h-4 bg-gray-300"></div>
        <div className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
          <Clock size={16} className="text-amber-600" />
          <span>Daily: 11:00 AM - 11:00 PM</span>
        </div>
        <div className="w-px h-4 bg-gray-300"></div>
        <a href="tel:+918989266180" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
          <Phone size={16} className="text-amber-600" />
          <span>+918989266180</span>
        </a>
      </div>
    </div>
  </div>
);



// Header Component
const Header = ({ isMenuOpen, setIsMenuOpen, isHeaderActive }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className={`fixed w-full top-0 z-40 transition-all  duration-500 ${
        isHeaderActive 
          ? 'top-0 bg-black/95 backdrop-blur-md py-4 shadow-xl border-b border-orange-500/30' 
          : 'top-0 lg:top-0 bg-transparent py-4 lg:py-3 '
      }`}>
        <div className="container mx-auto px-4 sm:px-6 relative top-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center group z-50">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">उ</span>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 tracking-wider">
                  उसलवाला
                </div>
                
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-white/90 text-sm font-semibold uppercase tracking-wider hover:text-orange-400 transition-all duration-300 relative group py-2 ${
                    index === 0 ? 'text-orange-400' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons - Only show when header is active (scrolled) */}
            <div className={`hidden lg:flex items-center gap-3 xl:gap-4 transition-all duration-500 ${
              isHeaderActive 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-8 pointer-events-none'
            }`}>
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 xl:px-6 py-2 xl:py-3 font-semibold text-sm uppercase tracking-wider rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center gap-2">
                <Smartphone size={16} />
                <span className="hidden xl:inline">Order on</span> tastyaana
              </button>
              <button className="bg-[#f4983d] text-white px-4 xl:px-6 py-2 xl:py-3 font-semibold text-sm uppercase tracking-wider rounded-lg hover:from-orange-400 hover:to-red-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
                Book Table
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:text-orange-400 transition-colors z-50 relative"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-50 transform transition-all duration-500 lg:hidden ${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col h-full pt-20">
          
          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/90 text-lg font-semibold uppercase tracking-wider py-6 border-b border-white/10 hover:text-orange-400 transition-colors relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Action Buttons */}
          <div className="px-6 py-6 space-y-4">
            <a href="https://www.tastyaana.com/" className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 font-semibold uppercase tracking-wider rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 flex items-center justify-center gap-2">
              <Smartphone size={20} />
              Order on tastyaana
            </a>
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 font-semibold uppercase tracking-wider rounded-lg hover:from-orange-400 hover:to-red-400 transition-all duration-300">
              Book Table
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="px-6 py-6 border-t border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
            <div className="text-center">
              <h3 className="text-orange-400 text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-white/80 mb-2 text-sm">Scheme No.78</p>
              <p className="text-white/80 mb-4 text-sm">Indore, Madhya Pradesh 452001</p>
              <p className="text-white/80 mb-6 text-sm">Open: 11:00 AM - 11:00 PM</p>
              <a href="tel:+919876543210" className="text-orange-400 font-bold text-xl hover:text-white transition-colors">
                +918989266180
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Component
// const Hero = ({ currentSlide, setCurrentSlide }) => {
//   const heroSlides = [
//     {
//       image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Authentic Indian Flavors",
//       title: "स्वादिष्ट उसल का मज़ा",
//       text: "Experience the authentic taste of traditional Indian Usal made with love and finest spices"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Fresh & Healthy",
//       title: "हर दिन ताजा बनाया जाता है",
//       text: "Fresh ingredients, traditional recipes, and modern hygiene standards for the perfect meal"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Home Delivery Available",
//       title: "घर बैठे मिले स्वादिष्ट खाना",
//       text: "Now delivering through tastyaana - Your favorite food delivery partner with best service"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden font-['Plus_Jakarta_Sans]">
//       {heroSlides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
//           <img
//             src={slide.image}
//             alt=""
//             className="w-full h-full object-cover"
//           />
          
//           <div className="absolute inset-0 flex items-center justify-center px-4">
//             <div className="text-center max-w-4xl">
//               <div className="mb-6">
//                 <span className="inline-block text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-widest bg-orange-400/10 px-3 sm:px-4 py-2 rounded-full border border-orange-400/20">
//                   {slide.subtitle}
//                 </span>
//               </div>
              
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
//                 {slide.title}
//               </h1>
              
//               <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
//                 {slide.text}
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
//                 <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base uppercase tracking-wider rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center justify-center gap-2">
//                   <Smartphone size={18} />
//                   Order on tastyaana
//                 </button>
//                 <button className="w-full sm:w-auto bg-[#f4983d] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base uppercase tracking-wider rounded-lg hover:from-orange-400 hover:to-red-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
//                   View Menu
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Buttons - Hidden on small screens */}
//       <button
//         onClick={prevSlide}
//         className="hidden md:flex absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm border-2 border-orange-400/50 text-orange-400 w-12 h-12 lg:w-14 lg:h-14 rounded-full items-center justify-center hover:bg-orange-400 hover:text-black transition-all duration-300 hover:scale-110"
//       >
//         <ChevronLeft size={20} />
//       </button>
      
//       <button
//         onClick={nextSlide}
//         className="hidden md:flex absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm border-2 border-orange-400/50 text-orange-400 w-12 h-12 lg:w-14 lg:h-14 rounded-full items-center justify-center hover:bg-orange-400 hover:text-black transition-all duration-300 hover:scale-110"
//       >
//         <ChevronRight size={20} />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
//         {heroSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
//               index === currentSlide ? 'bg-orange-400 scale-125' : 'bg-white/50 hover:bg-white/80'
//             }`}
//           />
//         ))}
//       </div>

      

//       {/* Floating tastyaana Button */}
//       <div className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-xs font-bold uppercase shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer">
//         <Smartphone size={20} className="mb-2" />
//         <span>Order on</span>
//         <span>tastyaana</span>
//       </div>
//     </section>
//   );
// };
// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const heroSlides = [
//     {
//       image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Authentic Indian Flavors",
//       title: "स्वादिष्ट उसल का मज़ा",
//       text: "Experience the authentic taste of traditional Indian Usal made with love and finest spices"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Fresh & Healthy",
//       title: "हर दिन ताजा बनाया जाता है",
//       text: "Fresh ingredients, traditional recipes, and modern hygiene standards for the perfect meal"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Home Delivery Available",
//       title: "घर बैठे मिले स्वादिष्ट खाना",
//       text: "Now delivering through tastyaana - Your favorite food delivery partner with best service"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="py-24 bg-gray-50 font-['Plus_Jakarta_Sans']">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Slider Container */}
//           <div className="relative h-[500px] md:h-[600px] overflow-hidden">
//             {heroSlides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-all duration-1000 ${
//                   index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//                 }`}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
//                 <img
//                   src={slide.image}
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
                
//                 <div className="absolute inset-0 flex items-center justify-center px-6">
//                   <div className="text-center max-w-3xl">
//                     <div className="mb-6">
//                       <span className="inline-block text-amber-600 text-sm font-medium uppercase tracking-wide bg-white/90 px-4 py-2 rounded-full">
//                         {slide.subtitle}
//                       </span>
//                     </div>
                    
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
//                       {slide.title}
//                     </h1>
                    
//                     <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
//                       {slide.text}
//                     </p>
                    
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                       <button className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2">
//                         <Smartphone size={18} />
//                         Order on Tastyaana
//                       </button>
//                       <button className="w-full sm:w-auto bg-amber-600 text-white px-8 py-3 font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200">
//                         View Menu
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Navigation Buttons */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
//             >
//               <ChevronLeft size={20} />
//             </button>
            
//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
//             >
//               <ChevronRight size={20} />
//             </button>

//             {/* Slide Indicators */}
//             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
//               {heroSlides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Additional Content Below Slider */}
//         <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
//               Why Choose Usalwala?
//             </h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               We bring you the authentic taste of Maharashtra with our traditional recipes, 
//               fresh ingredients, and passionate cooking. Every dish is prepared with love and 
//               served with pride.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-green-600 text-white px-6 py-3 font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2">
//                 <Smartphone size={18} />
//                 Order Now
//               </button>
//               <button className="border border-gray-300 text-gray-700 px-6 py-3 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
//                 Call +918989266180
//               </button>
//             </div>
//           </div>
          
//           <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
//             <h3 className="text-lg font-medium text-gray-900 mb-3">Opening Hours</h3>
//             <div className="space-y-2 text-sm text-gray-600">
//               <div className="flex justify-between">
//                 <span>Monday - Sunday</span>
//                 <span className="font-medium">11:00 AM - 11:00 PM</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Kitchen Hours</span>
//                 <span className="font-medium">11:00 AM - 10:30 PM</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      subtitle: "Authentic Indian Flavors",
      title: "Delicious Usal Experience",
      text: "Experience the authentic taste of traditional Indian Usal made with love and finest spices"
    },
    {
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2070&q=80",
      subtitle: "Fresh & Healthy",
      title: "Freshly Prepared Every Day",
      text: "Fresh ingredients, traditional recipes, and modern hygiene standards for the perfect meal"
    },
    {
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2070&q=80",
      subtitle: "Home Delivery Available",
      title: "Delicious Food Delivered Home",
      text: "Now delivering through tastyaana - Your favorite food delivery partner with best service"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full pt-5 mt-10">
      {/* Hero Slider */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center max-w-3xl">
                <div className="mb-6">
                  <span className="inline-block text-amber-600 text-sm font-medium uppercase tracking-wide bg-white/90 px-4 py-2 rounded-full">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.text}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href='https://www.tastyaana.com/' className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2">
                    <Smartphone size={18} />
                    Order on Tastyaana
                  </a>
                  <button className="w-full sm:w-auto bg-amber-600 text-white px-8 py-3 font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Additional Content Below Slider */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Why Choose Usalwala?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We bring you the authentic taste of Maharashtra with our traditional recipes, 
                fresh ingredients, and passionate cooking. Every dish is prepared with love and 
                served with pride.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href='https://www.tastyaana.com/' className="bg-green-600 text-white px-6 py-3 font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Smartphone size={18} />
                  Order Now
                </a>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                  Call +918989266180
                </button>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Opening Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span className="font-medium">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Kitchen Hours</span>
                  <span className="font-medium">11:00 AM - 10:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




// tastyaana Partnership Section
const tastyaanaPartnership = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-16">
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg sm:text-2xl">उ</span>
          </div>
          <div className="text-2xl sm:text-4xl font-bold text-gray-800">+</div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <Smartphone className="text-white" size={20} />
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          अब <span className="text-green-600">tastyaana</span> पर भी उपलब्ध
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
          Now enjoy your favorite Usal dishes through tastyaana - the premium food delivery service by NexisSparkX Technologies. Best food, best service, delivered to your doorstep!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Truck className="text-white" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Fast Delivery</h3>
          <p className="text-gray-600 text-sm sm:text-base">Lightning-fast delivery within 30 minutes to your doorstep</p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Smartphone className="text-white" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Easy Ordering</h3>
          <p className="text-gray-600 text-sm sm:text-base">User-friendly app interface for seamless ordering experience</p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Star className="text-white" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Quality Assured</h3>
          <p className="text-gray-600 text-sm sm:text-base">Premium quality food with hygienic packaging and handling</p>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12">
        <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold uppercase tracking-wider rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center gap-2 justify-center">
          <Smartphone size={18} />
          Download tastyaana App
        </button>
      </div>
    </div>
  </section>
);

// Service Component
// const Service = () => {
//   const services = [
//     { 
//       image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       title: "Traditional Usal",
//       description: "Authentic Maharashtrian Usal made with traditional spices and recipes",
//       icon: Utensils
//     },
//     { 
//       image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       title: "Tiffin Service",
//       description: "Daily fresh home-cooked meals delivered to your office or home",
//       icon: ShoppingBag
//     },
//     { 
//       image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80",
//       title: "Breakfast Special",
//       description: "Start your day with our delicious breakfast combos and fresh preparations",
//       icon: Coffee
//     }
//   ];

//   return (
//     <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="inline-block text-orange-400 text-sm font-bold uppercase tracking-widest bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20 mb-6">
//             Our Specialties
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             हमारी विशेषताएं
//           </h2>
//           <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
//             Experience authentic Indian flavors with our traditional recipes and modern service standards.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {services.map((service, index) => (
//             <div key={index} className="group cursor-pointer bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105">
//               <div className="relative overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
//                 <div className="absolute top-4 right-4 bg-orange-400/20 backdrop-blur-sm rounded-full p-3 border border-orange-400/30">
//                   <service.icon size={24} className="text-orange-400" />
//                 </div>
//               </div>
              
//               <div className="p-8 text-center">
//                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-white/70 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>
//                 <button className="text-orange-400 font-semibold uppercase tracking-wider hover:text-white transition-colors relative group">
//                   Learn More
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
const Service = () => {
  const services = [
    { 
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Traditional Usal",
      description: "Authentic Maharashtrian Usal made with traditional spices and recipes",
      icon: Utensils
    },
    { 
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Tiffin Service",
      description: "Daily fresh home-cooked meals delivered to your office or home",
      icon: ShoppingBag
    },
    { 
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80",
      title: "Breakfast Special",
      description: "Start your day with our delicious breakfast combos and fresh preparations",
      icon: Coffee
    }
  ];

  return (
    <section id="services" className="py-24 bg-white font-['Plus_Jakarta_Sans']">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-amber-600 text-sm font-extrabold uppercase tracking-wide">
              
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Our Specialities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience authentic Indian flavors with our traditional recipes and modern service standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 border border-gray-100">
                  <service.icon size={20} className="text-amber-600" />
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// About Component
// const About = () => (
//   <section id="about" className="py-20 bg-black">
//     <div className="container mx-auto px-6">
//       <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
//         <div className="text-center lg:text-left">
//           <span className="inline-block text-[#f4983d] text-sm font-bold uppercase tracking-widest bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20 mb-6">
//             Our Story
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             हमारी कहानी
//           </h2>
//           <p className="text-white/70 mb-8 text-lg leading-relaxed">
//             For over a decade, Usalwala has been serving authentic Indian flavors with love and dedication. Our journey began with a simple mission: to bring the taste of home-cooked meals to everyone who craves authentic Indian cuisine.
//           </p>
          
//           <div className="grid sm:grid-cols-2 gap-8 mb-8">
//             <div className="bg-gray-900/50 rounded-xl p-6 text-center">
//               <Award className="text-[#f4983d] mx-auto mb-4" size={32} />
//               <h3 className="text-xl  font-bold text-white mb-2">Quality First</h3>
//               <p className="text-white/70">Premium ingredients and traditional recipes</p>
//             </div>
//             <div className="bg-gray-900/50 rounded-xl p-6 text-center">
//               <Heart className="text-orange-400 mx-auto mb-4" size={32} />
//               <h3 className="text-xl font-bold text-white mb-2">Made with Love</h3>
//               <p className="text-white/70">Every dish prepared with care and passion</p>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 mb-8 border border-orange-400/20">
//             <p className="text-orange-400 font-semibold mb-2">Order Through Call</p>
//             <a
//               href="tel:+919876543210"
//               className="text-white text-2xl font-bold hover:text-orange-400 transition-colors"
//             >
//               +918989266180
//             </a>
//           </div>
          
//           <button className="bg-[#f4983d] text-white px-8 py-4 font-semibold uppercase tracking-wider rounded-lg hover:from-orange-400 hover:to-red-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
//             Learn More
//           </button>
//         </div>

//         <div className="relative">
//           <div className="relative rounded-2xl overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//               alt="About"
//               className="w-full rounded-2xl shadow-2xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//           </div>
          
//           <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-lg hidden lg:block">
//             <img
//               src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </div>
          
//           <div className="absolute -top-6 -right-6 bg-[#f4983d] rounded-2xl p-4 shadow-lg hidden lg:block">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-white">10+</div>
//               <div className="text-sm text-white/80">Years Experience</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );
const About = () => (
  <section id="about" className="py-24 bg-gray-50 font-['Plus_Jakarta_Sans']">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-block mb-4">
            <span className="text-amber-600 text-sm font-medium uppercase tracking-wide">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl  font-medium text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            For over a decade, Usalwala has been serving authentic Indian flavors with love and dedication. Our journey began with a simple mission: to bring the taste of home-cooked meals to everyone who craves authentic Indian cuisine.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 text-center border border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <Award className="text-amber-600 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm">Premium ingredients and traditional recipes</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <Heart className="text-amber-600 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Made with Love</h3>
              <p className="text-gray-600 text-sm">Every dish prepared with care and passion</p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 mb-8 border border-amber-100">
            <p className="text-amber-700 font-medium mb-2">Order Through Call</p>
            <a
              href="tel:+918989266180"
              className="text-gray-900 text-2xl font-medium hover:text-amber-600 transition-colors"
            >
              +918989266180
            </a>
          </div>
          
          <button className="bg-amber-600 text-white px-8 py-3 font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200">
            Learn More
          </button>
        </div>

        <div className="relative">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="About"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg overflow-hidden shadow-lg hidden lg:block border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -top-4 -right-4 bg-amber-600 rounded-lg p-4 shadow-lg hidden lg:block">
            <div className="text-center">
              <div className="text-xl font-medium text-white">10+</div>
              <div className="text-sm text-white/90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Enhanced Menu Component
const Menu1 = () => {
  const menuItems = [
    {
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Special Usal",
      price: "₹120",
      badge: "Popular",
      description: "Traditional Maharashtrian Usal with special spices and garnishing",
      rating: 4.8,
      time: "10 min"
    },
    {
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Misal Pav",
      price: "₹100",
      badge: "Spicy",
      description: "Spicy misal served with fresh pav and traditional accompaniments",
      rating: 4.9,
      time: "12 min"
    },
    {
      image: "https://images.unsplash.com/photo-1566843972142-a4cf85b0b43c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Poha",
      price: "₹80",
      description: "Light and fluffy poha with peanuts, onions and fresh coriander",
      rating: 4.7,
      time: "8 min"
    },
    {
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Vada Pav",
      price: "₹40",
      badge: "Mumbai Special",
      description: "Classic Mumbai street food with crispy vada and soft pav",
      rating: 5.0,
      time: "5 min"
    },
    {
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Upma",
      price: "₹70",
      description: "Healthy and nutritious upma with vegetables and aromatic spices",
      rating: 4.6,
      time: "10 min"
    },
    {
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Tiffin Combo",
      price: "₹180",
      badge: "Best Value",
      description: "Complete meal with dal, rice, sabzi, chapati and pickle",
      rating: 4.8,
      time: "15 min"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-white font-['Poppins']">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-amber-600 text-sm font-medium uppercase tracking-wide">
              Our Menu
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Authentic Indian Cuisine
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our carefully curated selection of traditional dishes, 
            crafted with authentic recipes and the finest ingredients.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {menuItems.map((item, index) => (
            <div key={index} className="group bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      {item.badge && (
                        <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-gray-900 font-medium text-lg">
                        {item.name}
                      </h3>
                      <span className="text-amber-600 font-medium text-lg">
                        {item.price}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-400 fill-current" />
                        <span className="text-gray-600 text-sm">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-gray-500" />
                        <span className="text-gray-500 text-sm">{item.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center bg-gray-50 rounded-lg p-8 border border-gray-100">
          <p className="text-gray-700 mb-6 text-base">
            Kitchen Hours: Daily from <span className="text-amber-600 font-medium">11:00 AM</span> to <span className="text-amber-600 font-medium">11:00 PM</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://www.tastyaana.com/' className="bg-green-600 text-white px-8 py-3 font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 justify-center">
              <Smartphone size={18} />
              Order on Tastyaana
            </a>
            <button className="bg-amber-600 text-white px-8 py-3 font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Testimonial Component
// const Testimonial = () => {
//   const testimonials = [
//     {
//       text: "उसलवाला का खाना बहुत ही स्वादिष्ट है! घर जैसा स्वाद मिलता है। अब tastyaana पर भी मिल रहा है जो और भी अच्छी बात है।",
//       author: "रोहित शर्मा",
//       position: "Regular Customer",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//       rating: 5
//     },
//     {
//       text: "The quality of food is exceptional! Their tiffin service has made my office lunch so much better. Highly recommend!",
//       author: "प्रिया पटेल",
//       position: "Office Worker",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//       rating: 5
//     },
//     {
//       text: "Best Misal Pav in the city! The spice level is perfect and the taste is authentic. Will definitely order again through tastyaana.",
//       author: "अमित कुमार",
//       position: "Food Blogger",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//       rating: 5
//     }
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"}}>
//       <div className="absolute inset-0 bg-black/80"></div>
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block text-orange-400 text-sm font-bold uppercase tracking-widest bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20 mb-6">
//             Customer Reviews
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             ग्राहकों की प्रतिक्रिया
//           </h2>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`transition-all duration-500 ${
//                   index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
//                 }`}
//               >
//                 <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
//                   <div className="text-6xl text-orange-400 font-bold mb-6">"</div>
                  
//                   <p className="text-white text-xl md:text-2xl font-medium mb-8 leading-relaxed">
//                     {testimonial.text}
//                   </p>
                  
//                   <div className="flex justify-center items-center gap-2 mb-8">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} size={20} className="text-orange-400 fill-current" />
//                     ))}
//                   </div>
                  
//                   <div className="flex flex-col items-center">
//                     <img
//                       src={testimonial.avatar}
//                       alt={testimonial.author}
//                       className="w-20 h-20 rounded-full mb-4 border-4 border-orange-400/20"
//                     />
//                     <h4 className="text-white font-bold text-lg mb-2">{testimonial.author}</h4>
//                     <p className="text-orange-400 text-sm uppercase tracking-wider">{testimonial.position}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="flex justify-center items-center gap-3 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentTestimonial(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentTestimonial ? 'bg-orange-400 scale-125' : 'bg-white/30 hover:bg-white/50'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
const Testimonial = () => {
  const testimonials = [
    {
      text: "उसलवाला का खाना बहुत ही स्वादिष्ट है! घर जैसा स्वाद मिलता है। अब tastyaana पर भी मिल रहा है जो और भी अच्छी बात है।",
      author: "Mr.Rohit Sharma",
      position: "Regular Customer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      text: "The quality of food is exceptional! Their tiffin service has made my office lunch so much better. Highly recommend!",
      author: "Ms.Priya Patel",
      position: "Office Worker",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      text: "Best Misal Pav in the city! The spice level is perfect and the taste is authentic. Will definitely order again through tastyaana.",
      author: "Mr. Amit Kumar",
      position: "Food Blogger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-50 font-['Plus_Jakarta_Sans']">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-amber-600 text-sm font-medium uppercase tracking-wide">
              Hear from Our Customers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6">
          Customer Reviews
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="text-center bg-white rounded-lg p-8 border border-gray-100 shadow-lg">
                  <div className="text-4xl text-amber-600 font-light mb-6">"</div>
                  
                  <p className="text-gray-700 text-lg md:text-xl font-light mb-8 leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex justify-center items-center gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full mb-4 border-2 border-gray-100"
                    />
                    <h4 className="text-gray-900 font-medium text-lg mb-2">{testimonial.author}</h4>
                    <p className="text-amber-600 text-sm font-medium">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-amber-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




// Enhanced Reservation Component
// const Reservation = () => (
//   <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
//     <div className="container mx-auto px-6">
//       <div className="text-center mb-16">
//         <span className="inline-block text-orange-400 text-sm font-bold uppercase tracking-widest bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20 mb-6">
//           Contact Us
//         </span>
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//           संपर्क करें
//         </h2>
//         <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
//           आज ही ऑर्डर करें या हमसे संपर्क करें। tastyaana ऐप पर भी उपलब्ध है।
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-2 bg-gray-800/50 rounded-2xl overflow-hidden max-w-7xl mx-auto backdrop-blur-sm">
//         <div className="p-8 lg:p-12">
//           <h3 className="text-3xl font-bold text-white text-center mb-8">
//             Get in Touch
//           </h3>
          
//           <form className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="relative">
//                 <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full bg-gray-900/50 text-white pl-12 pr-4 py-4 rounded-lg border border-gray-600 focus:border-orange-400 focus:bg-gray-900/80 outline-none transition-all duration-300"
//                 />
//               </div>
//               <div className="relative">
//                 <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" size={20} />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full bg-gray-900/50 text-white pl-12 pr-4 py-4 rounded-lg border border-gray-600 focus:border-orange-400 focus:bg-gray-900/80 outline-none transition-all duration-300"
//                 />
//               </div>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="relative">
//                 <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" size={20} />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full bg-gray-900/50 text-white pl-12 pr-4 py-4 rounded-lg border border-gray-600 focus:border-orange-400 focus:bg-gray-900/80 outline-none transition-all duration-300"
//                 />
//               </div>
              
//               <div className="relative">
//                 <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" size={20} />
//                 <select className="w-full bg-gray-900/50 text-white pl-12 pr-4 py-4 rounded-lg border border-gray-600 focus:border-orange-400 focus:bg-gray-900/80 outline-none appearance-none transition-all duration-300">
//                   <option>Preferred Time</option>
//                   <option>11:00 AM - 1:00 PM</option>
//                   <option>1:00 PM - 3:00 PM</option>
//                   <option>3:00 PM - 5:00 PM</option>
//                   <option>5:00 PM - 7:00 PM</option>
//                   <option>7:00 PM - 9:00 PM</option>
//                   <option>9:00 PM - 11:00 PM</option>
//                 </select>
//               </div>
//             </div>

//             <div className="relative">
//               <Mail className="absolute left-4 top-4 text-orange-400" size={20} />
//               <textarea
//                 placeholder="Your message or special requirements"
//                 rows="4"
//                 className="w-full bg-gray-900/50 text-white pl-12 pr-4 py-4 rounded-lg border border-gray-600 focus:border-orange-400 focus:bg-gray-900/80 outline-none resize-none transition-all duration-300"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 font-bold uppercase tracking-wider rounded-lg hover:from-orange-400 hover:to-red-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         <div className="bg-gradient-to-br from-gray-900 to-black p-8 lg:p-12">
//           <h3 className="text-3xl font-bold text-white text-center mb-8">Contact Information</h3>
          
//           <div className="space-y-8">
//             <div className="bg-gray-800/50 rounded-xl p-6 text-center">
//               <Phone className="text-orange-400 mx-auto mb-4" size={32} />
//               <h4 className="text-orange-400 font-bold mb-2">Call Us</h4>
//               <a href="tel:+919876543210" className="text-white text-xl font-semibold hover:text-orange-400 transition-colors">
//                 +918989266180
//               </a>
//             </div>

//             <div className="bg-gray-800/50 rounded-xl p-6 text-center">
//               <MapPin className="text-orange-400 mx-auto mb-4" size={32} />
//               <h4 className="text-orange-400 font-bold mb-2">Visit Us</h4>
//               <address className="text-white/80 not-italic">
//                 Indore , Madhya Pradesh 452001
//               </address>
//             </div>

//             <div className="bg-gray-800/50 rounded-xl p-6 text-center">
//               <Clock className="text-orange-400 mx-auto mb-4" size={32} />
//               <h4 className="text-orange-400 font-bold mb-2">Opening Hours</h4>
//               <p className="text-white/80">
//                 Monday - Sunday<br />
//                 11:00 AM - 11:00 PM
//               </p>
//             </div>

//             <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 text-center border border-green-400/20">
//               <Smartphone className="text-green-400 mx-auto mb-4" size={32} />
//               <h4 className="text-green-400 font-bold mb-2">Order Online</h4>
//               <p className="text-white/80 mb-4">Available on tastyaana App</p>
//               <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 font-semibold rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 text-sm">
//                 Download App
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

const Reservation = () => (
  <section id="contact" className="py-24 bg-white font-['Plus_Jakarta_Sans']">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="text-amber-600 text-sm uppercase tracking-wide">
            Talk to Us
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Order or Contact Us Now!  Available on Tastyaana App.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
        <div className="p-8 lg:p-12 bg-white">
          <h3 className="text-2xl font-medium text-gray-900 text-center mb-8">
            Get in Touch
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={18} />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white text-gray-900 pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all duration-200"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={18} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white text-gray-900 pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white text-gray-900 pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all duration-200"
                />
              </div>
              
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={18} />
                <select className="w-full bg-white text-gray-900 pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none appearance-none transition-all duration-200">
                  <option>Preferred Time</option>
                  <option>11:00 AM - 1:00 PM</option>
                  <option>1:00 PM - 3:00 PM</option>
                  <option>3:00 PM - 5:00 PM</option>
                  <option>5:00 PM - 7:00 PM</option>
                  <option>7:00 PM - 9:00 PM</option>
                  <option>9:00 PM - 11:00 PM</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-amber-600" size={18} />
              <textarea
                placeholder="Your message or special requirements"
                rows="4"
                className="w-full bg-white text-gray-900 pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none resize-none transition-all duration-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
              <Phone className="text-amber-600 mx-auto mb-4" size={24} />
              <h4 className="text-amber-600 font-medium mb-2">Call Us</h4>
              <a href="tel:+918989266180" className="text-gray-900 text-lg font-medium hover:text-amber-600 transition-colors">
                +918989266180
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
              <MapPin className="text-amber-600 mx-auto mb-4" size={24} />
              <h4 className="text-amber-600 font-medium mb-2">Visit Us</h4>
              <address className="text-gray-600 not-italic">
                Shop No. 12, Indore<br />
                Madhya Pradesh 452001
              </address>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
              <Clock className="text-amber-600 mx-auto mb-4" size={24} />
              <h4 className="text-amber-600 font-medium mb-2">Opening Hours</h4>
              <p className="text-gray-600">
                Monday - Sunday<br />
                11:00 AM - 11:00 PM
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 text-center border border-green-100">
              <Smartphone className="text-green-600 mx-auto mb-4" size={24} />
              <h4 className="text-green-600 font-medium mb-2">Order Online</h4>
              <p className="text-gray-600 mb-4">Available on tastyaana </p>
              <a href="https://www.tastyaana.com/" className="bg-green-600 text-white px-6 py-3 font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                Visit Tastyaana
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);





// Enhanced Features Component
// const Features = () => {
//   const features = [
//     {
//       icon: Award,
//       title: "Premium Quality",
//       description: "Fresh ingredients and authentic recipes for the best taste"
//     },
//     {
//       icon: Zap,
//       title: "Fast Service",
//       description: "Quick preparation and delivery without compromising quality"
//     },
//     {
//       icon: Heart,
//       title: "Made with Love",
//       description: "Every dish is prepared with care and passion for authentic flavors"
//     },
//     {
//       icon: Users,
//       title: "Family Friendly",
//       description: "Wholesome meals perfect for individuals and families alike"
//     }
//   ];

//   return (
//     <section className="py-20 bg-black">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="inline-block text-orange-400 text-sm font-bold uppercase tracking-widest bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20 mb-6">
//             Why Choose Us
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             हमें क्यों चुनें
//           </h2>
//           <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
//             Experience the difference with our commitment to quality, authenticity, and exceptional service.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {features.map((feature, index) => (
//             <div key={index} className="group text-center">
//               <div className="relative mb-8">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
//                   <feature.icon size={32} className="text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
//                 {feature.title}
//               </h3>
//               <p className="text-white/70 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
const Features = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Fresh ingredients and authentic recipes for the best taste"
    },
    {
      icon: Zap,
      title: "Fast Service",
      description: "Quick preparation and delivery without compromising quality"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with care and passion for authentic flavors"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Wholesome meals perfect for individuals and families alike"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 font-['Plus_Jakarta_Sans']">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-amber-600 text-sm font-medium uppercase tracking-wide">
              Our Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the difference with our commitment to quality, authenticity, and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center bg-white rounded-lg p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                  <feature.icon size={24} className="text-amber-600" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




// Enhanced Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-b from-gray-900 to-black py-20">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">उ</span>
            </div>
            <div className="text-3xl font-bold text-orange-400">उसलवाला</div>
          </div>
          <p className="text-white/70 mb-6 leading-relaxed">
            Serving authentic Indian flavors with love and dedication for over a decade. Now available on tastyaana for your convenience.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-400" size={20} />
              <span className="text-white/70">Scheme No. 78, Indore, Madhya Pradesh</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-orange-400" size={20} />
              <a href="tel:+919876543210" className="text-white/70 hover:text-orange-400 transition-colors">
                +918989266180
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-400" size={20} />
              <a href="mailto:info@usalwala.com" className="text-white/70 hover:text-orange-400 transition-colors">
                info@usalwala.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'Menu', 'About Us', 'Services', 'Contact', 'Order Online'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white/70 hover:text-orange-400 transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* tastyaana Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Order Online</h3>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="text-green-400" size={24} />
              <span className="text-green-400 font-bold text-lg">tastyaana</span>
            </div>
            <p className="text-white/70 mb-4 text-sm">
              Order your favorite dishes through tastyaana app - powered by NexisparkX Technologies.
            </p>
            <a href="https://www.tastyaana.com/" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 text-sm font-semibold">
              Visit
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-center md:text-left">
            © 2025 उसलवाला. All rights reserved. Developed by <span className="text-orange-400 font-semibold">NexisSparkX Technologies</span>
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// Back to Top Component
const BackToTop = ({ showBackToTop }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showBackToTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-110 z-40"
    >
      <ArrowUp size={24} />
    </button>
  );
};

// Main App Component
const UsalawalRestaurant = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'visible';
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsHeaderActive(scrolled);
      setShowBackToTop(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Preloader isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <TastyaanaPromo />
          {/* <TopBar isHeaderActive={isHeaderActive} /> */}
          <Header 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
            isHeaderActive={isHeaderActive} 
          />
          <Hero currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
          <tastyaanaPartnership />
          <Service />
          <About />
          <Menu1 />
          <Testimonial />
          <Reservation />
          <Features />
          <Footer />
          <BackToTop showBackToTop={showBackToTop} />
        </>
      )}
    </div>
  );
};

export default UsalawalRestaurant;