import type React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-blue-600 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h5 className="text-lg font-semibold mb-4">About Us</h5>
            <p className="text-sm mb-6">
              We are dedicated to providing innovative solutions that help businesses
              grow and succeed in the digital age.
            </p>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/tutelagestudyabroad/">
                <FaFacebookF />
              </Link>
              <Link to="https://twitter.com/tutelagestudy">
                <FaTwitter />
              </Link>
              <Link to="https://www.instagram.com/anupsinghx7/">
                <FaInstagram />
              </Link>
              <Link to="https://linkedin.com/in/anup-singh-734563319">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/investor-relations" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Investor Relations</Link>
              </li>
              <li>
                <Link to="/leads" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Leads</Link>
              </li>
              <li>
                <Link to="/coaching" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Coaching</Link>
              </li>
              <li>
                <Link to="/university" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>University</Link>
              </li>
              <li>
                <Link to="/free-listing" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Free Listing</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/city/mumbai" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Top Cities</Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Categories</Link>
              </li>
              <li>
                <Link to="/university/1" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Top-Ranked Uni.</Link>
              </li>
              <li>
                <Link to="/stream/medical" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Medicine Medical</Link>
              </li>
              <li>
                <Link to="/university" className="hover:text-blue-200 transition-colors" onClick={scrollToTop}>Higher Education</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>B-16 Ground Floor, Mayfield Garden,Sector 50, Gurugram, Haryana, India 122002.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <Link to="tel:+1234567890">
                  +91 9667-667331
                </Link>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <Link to="mailto:contact@example.com">
                  justeducation@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-500 mt-8 pt-4 text-center">
          <p>©2025 JustEducation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
