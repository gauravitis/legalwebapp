import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Adv. Ajay Kumar Singh</h3>
            <p className="text-gray-400 leading-relaxed">
              Specializing in RERA and real estate law, providing expert legal counsel and representation
              for property-related matters across India.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors duration-300 block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-400 hover:text-white transition-colors duration-300 block py-1">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors duration-300 py-1">
                RERA Consultation
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 py-1">
                Real Estate Law
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 py-1">
                Property Disputes
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 py-1">
                Legal Documentation
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 (123) 456-7890</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">contact@example.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Legal Street, Law District,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Adv. Ajay Kumar Singh. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
