// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, MapPin, Clock, Phone, Mail } from 'lucide-react';

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isHeaderActive, setIsHeaderActive] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsHeaderActive(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsNavOpen(false);
//   }, [location]);

//   const isActiveLink = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <>
//       {/* Topbar */}
//       <div className="hidden md:block bg-transparent border-b border-white/20 py-3 fixed w-full z-40 transition-transform duration-300">
//         <div className="container mx-auto px-4 flex justify-center items-center gap-8">
//           <div className="flex items-center gap-2">
//             <MapPin className="w-4 h-4" />
//             <span className="text-sm">Restaurant St, Delicious City, London 9578, UK</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock className="w-4 h-4" />
//             <span className="text-sm">Daily: 8.00 am to 10.00 pm</span>
//           </div>
//           <a href="tel:+11234567890" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
//             <Phone className="w-4 h-4" />
//             <span className="text-sm">+1 123 456 7890</span>
//           </a>
//           <a href="mailto:booking@restaurant.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
//             <Mail className="w-4 h-4" />
//             <span className="text-sm">booking@restaurant.com</span>
//           </a>
//         </div>
//       </div>

//       {/* Header */}
//       <header className={`fixed w-full z-50 transition-all duration-300 ${
//         isHeaderActive 
//           ? 'bg-gray-800/95 backdrop-blur-sm py-4 top-0' 
//           : 'bg-transparent py-8 top-0 md:top-12'
//       }`}>
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold text-amber-400">
//             <span className="font-serif">Grilli</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             <Link 
//               to="/" 
//               className={`hover:text-amber-400 transition-colors font-semibold tracking-wide relative group ${
//                 isActiveLink('/') ? 'text-amber-400' : ''
//               }`}
//             >
//               Home
//               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-300 ${
//                 isActiveLink('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//               }`}></span>
//             </Link>
//             <Link 
//               to="/menu" 
//               className={`hover:text-amber-400 transition-colors font-semibold tracking-wide relative group ${
//                 isActiveLink('/menu') ? 'text-amber-400' : ''
//               }`}
//             >
//               Menu
//               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-300 ${
//                 isActiveLink('/menu') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//               }`}></span>
//             </Link>
//             <Link 
//               to="/about" 
//               className={`hover:text-amber-400 transition-colors font-semibold tracking-wide relative group ${
//                 isActiveLink('/about') ? 'text-amber-400' : ''
//               }`}
//             >
//               About Us
//               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-300 ${
//                 isActiveLink('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//               }`}></span>
//             </Link>
//             <Link 
//               to="/chefs" 
//               className={`hover:text-amber-400 transition-colors font-semibold tracking-wide relative group ${
//                 isActiveLink('/chefs') ? 'text-amber-400' : ''
//               }`}
//             >
//               Our Chefs
//               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-300 ${
//                 isActiveLink('/chefs') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//               }`}></span>
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`hover:text-amber-400 transition-colors font-semibold tracking-wide relative group ${
//                 isActiveLink('/contact') ? 'text-amber-400' : ''
//               }`}
//             >
//               Contact
//               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-300 ${
//                 isActiveLink('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//               }`}></span>
//             </Link>
//           </nav>

//           <Link 
//             to="/reservation"
//             className="hidden lg:block bg-transparent border-2 border-amber-400 text-amber-400 px-6 py-3 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 font-bold tracking-wider text-sm relative overflow-hidden group"
//           >
//             <span className="relative z-10">FIND A TABLE</span>
//             <span className="absolute inset-0 bg-amber-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
//           </Link>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className="lg:hidden p-2"
//           >
//             <Menu className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`lg:hidden fixed inset-0 bg-gray-900 z-50 transform transition-transform duration-300 ${
//           isNavOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}>
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-8">
//               <Link to="/" className="text-2xl font-bold text-amber-400 font-serif">
//                 Grilli
//               </Link>
//               <button onClick={() => setIsNavOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <nav className="space-y-6">
//               <Link 
//                 to="/" 
//                 className={`block text-xl transition-colors ${
//                   isActiveLink('/') ? 'text-amber-400' : 'hover:text-amber-400'
//                 }`}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/menu" 
//                 className={`block text-xl transition-colors ${
//                   isActiveLink('/menu') ? 'text-amber-400' : 'hover:text-amber-400'
//                 }`}
//               >
//                 Menu
//               </Link>
//               <Link 
//                 to="/about" 
//                 className={`block text-xl transition-colors ${
//                   isActiveLink('/about') ? 'text-amber-400' : 'hover:text-amber-400'
//                 }`}
//               >
//                 About Us
//               </Link>
//               <Link 
//                 to="/chefs" 
//                 className={`block text-xl transition-colors ${
//                   isActiveLink('/chefs') ? 'text-amber-400' : 'hover:text-amber-400'
//                 }`}
//               >
//                 Our Chefs
//               </Link>
//               <Link 
//                 to="/contact" 
//                 className={`block text-xl transition-colors ${
//                   isActiveLink('/contact') ? 'text-amber-400' : 'hover:text-amber-400'
//                 }`}
//               >
//                 Contact
//               </Link>
//               <Link 
//                 to="/reservation" 
//                 className={`block text-xl transition-colors ${
//                   isActiveLink('/reservation') ? 'text-amber-400' : 'hover:text-amber-400'
//                 }`}
//               >
//                 Reservation
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path) => {
    return activeLink === path;
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsNavOpen(false);
  };

  return (
    <div className="font-['Plus_Jakarta_Sans']">
      {/* Topbar */}
      <div className="hidden md:block bg-white border-b border-gray-200 py-3 fixed w-full z-40 transition-transform duration-300">
        <div className="max-w-6xl mx-auto px-6 flex justify-center items-center gap-8">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span className="text-sm">Shop No. 12, Indore, Madhya Pradesh, 452001</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4 text-amber-600" />
            <span className="text-sm">Daily: 11:00 AM - 11:00 PM</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <a href="tel:+918989266180" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
            <Phone className="w-4 h-4 text-amber-600" />
            <span className="text-sm">+918989266180</span>
          </a>
          <div className="w-px h-4 bg-gray-300"></div>
          <a href="mailto:contact@usalwala.com" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
            <Mail className="w-4 h-4 text-amber-600" />
            <span className="text-sm">contact@usalwala.com</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isHeaderActive 
          ? 'bg-white/95 backdrop-blur-sm py-4 top-0 shadow-sm' 
          : 'bg-white py-6 top-0 md:top-12'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-2xl font-medium text-gray-900">
            <span className="text-amber-600">Usal</span>wala
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="/" 
              onClick={() => handleLinkClick('/')}
              className={`hover:text-amber-600 transition-colors font-medium relative group ${
                isActiveLink('/') ? 'text-amber-600' : 'text-gray-700'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform transition-transform duration-300 ${
                isActiveLink('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              href="/menu" 
              onClick={() => handleLinkClick('/menu')}
              className={`hover:text-amber-600 transition-colors font-medium relative group ${
                isActiveLink('/menu') ? 'text-amber-600' : 'text-gray-700'
              }`}
            >
              Menu
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform transition-transform duration-300 ${
                isActiveLink('/menu') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              href="/about" 
              onClick={() => handleLinkClick('/about')}
              className={`hover:text-amber-600 transition-colors font-medium relative group ${
                isActiveLink('/about') ? 'text-amber-600' : 'text-gray-700'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform transition-transform duration-300 ${
                isActiveLink('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              href="/services" 
              onClick={() => handleLinkClick('/services')}
              className={`hover:text-amber-600 transition-colors font-medium relative group ${
                isActiveLink('/services') ? 'text-amber-600' : 'text-gray-700'
              }`}
            >
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform transition-transform duration-300 ${
                isActiveLink('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              href="/contact" 
              onClick={() => handleLinkClick('/contact')}
              className={`hover:text-amber-600 transition-colors font-medium relative group ${
                isActiveLink('/contact') ? 'text-amber-600' : 'text-gray-700'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform transition-transform duration-300 ${
                isActiveLink('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
          </nav>

          <a 
            href="/order"
            className="hidden lg:block bg-amber-600 text-white px-6 py-3 hover:bg-amber-700 transition-colors duration-200 font-medium rounded-lg"
          >
            Order Now
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <a href="/" className="text-2xl font-medium text-gray-900">
                <span className="text-amber-600">Usal</span>wala
              </a>
              <button onClick={() => setIsNavOpen(false)} className="text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-6">
              <a 
                href="/" 
                onClick={() => handleLinkClick('/')}
                className={`block text-xl transition-colors ${
                  isActiveLink('/') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Home
              </a>
              <a 
                href="/menu" 
                onClick={() => handleLinkClick('/menu')}
                className={`block text-xl transition-colors ${
                  isActiveLink('/menu') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Menu
              </a>
              <a 
                href="/about" 
                onClick={() => handleLinkClick('/about')}
                className={`block text-xl transition-colors ${
                  isActiveLink('/about') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                About Us
              </a>
              <a 
                href="/services" 
                onClick={() => handleLinkClick('/services')}
                className={`block text-xl transition-colors ${
                  isActiveLink('/services') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Services
              </a>
              <a 
                href="/contact" 
                onClick={() => handleLinkClick('/contact')}
                className={`block text-xl transition-colors ${
                  isActiveLink('/contact') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Contact
              </a>
              <a 
                href="/order" 
                onClick={() => handleLinkClick('/order')}
                className={`block text-xl transition-colors ${
                  isActiveLink('/order') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Order Now
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;